package com.nocountry.cleanreactive.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mongodb.client.gridfs.model.GridFSFile;
import com.nocountry.cleanreactive.exceptions.NotFoundException;
import com.nocountry.cleanreactive.model.User;
import com.nocountry.cleanreactive.responses.UserResponse;
import com.nocountry.cleanreactive.responses.UsersResponse;
import com.nocountry.cleanreactive.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/users")
public class UserController {

	@Autowired
	private GridFsTemplate gridFsTemplate;

	private final UserService userService;

	// @Operation(summary = "Save user", description = "Save user to the database",
	// tags = { "user" })
	// @io.swagger.v3.oas.annotations.parameters.RequestBody(content =
	// @Content(schema = @Schema(implementation = UserSchema.class)))
	// @ApiResponses(value = {
	// @ApiResponse(responseCode = "201", description = "Successful Operation",
	// content = @Content(schema = @Schema(implementation = UserSchema.class))),
	// @ApiResponse(responseCode = "400", description = "Bad Request", content =
	// @Content(schema = @Schema(defaultValue = "Bad Request"))) })
	// @PostMapping
	// public ResponseEntity<UserResponse> save(@Valid @RequestBody User user) {
	// try {
	// userService.save(user);
	// UserResponse response = new UserResponse();
	// response.setUser(user);
	// return new ResponseEntity<>(response, HttpStatus.CREATED);
	// } catch (Exception e) {
	// UserResponse response = new UserResponse();
	// response.setMessage(e.getMessage());
	// return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	// }
	// }

	@Operation(summary = "Upload User Image", description = "Upload image to the database", tags = { "user" })
	@PostMapping(value = "upload-image/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> uploadImage(@PathVariable("id") String id,
			@RequestParam("file") MultipartFile file) {
		try {
			userService.UploadImage(file, id);
			return new ResponseEntity<>("added", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("error", HttpStatus.BAD_REQUEST);
		}
	}

	@Operation(summary = "Get Image By UserId", description = "Get image from the database", tags = { "user" })
	@GetMapping("images/{id}")
	public ResponseEntity<?> serveImage(@PathVariable String id) {
		GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("metadata.userId").is(id)));
		if (file == null) {
			return ResponseEntity.notFound().build();
		}
		GridFsResource resource = gridFsTemplate.getResource(file);
		try {
			return ResponseEntity.ok()
					.contentType(MediaType.valueOf(resource.getContentType()))
					.body(new InputStreamResource(resource.getInputStream()));
		} catch (IOException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@Operation(summary = "Get users [ADMIN]", description = "Get users from the database", tags = { "user" })
	@GetMapping
	public ResponseEntity<UsersResponse> findAll() {
		try {
			List<User> users = userService.findAll();
			UsersResponse response = new UsersResponse();
			response.setUsers(users);

			if (users.size() > 0) {
				return new ResponseEntity<>(response, HttpStatus.OK);
			}
			throw new NotFoundException("Not found users");
		} catch (Exception e) {
			UsersResponse response = new UsersResponse();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Get user By Id", description = "Serve user from the database", tags = { "user" })
	@GetMapping(path = "{id}")
	public ResponseEntity<?> findById(@PathVariable String id) {
		try {
			Optional<User> user = userService.findById(id);
			return new ResponseEntity<>(user, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Delete User By Id", description = "Delete user from the database", tags = { "user" })
	@DeleteMapping(path = "{id}")
	public ResponseEntity<UserResponse> deleteById(@PathVariable String id) {
		try {
			UserResponse response = new UserResponse();
			userService.deleteById(id);
			response.setUser(null);
			return new ResponseEntity<>(response, HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			UserResponse response = new UserResponse();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Update user", description = "Update user to the database", tags = { "user" })
	@io.swagger.v3.oas.annotations.parameters.RequestBody(content = @Content(schema = @Schema(implementation = User.class)))
	@PutMapping(path = "{id}")
	public ResponseEntity<UserResponse> update(@PathVariable String id, @Valid @RequestBody User user) {
		try {
			UserResponse userResponse = new UserResponse();

			User _user = userService.findById(id)
					.orElseThrow(() -> new NotFoundException("Not found user with the id " + id));

			_user.setName(user.getName());
			_user.setEmail(user.getEmail());
			_user.setPassword(user.getPassword());
			_user.setAddress(user.getAddress());
			_user.setPhoneNumber(user.getPhoneNumber());
			_user.setRole(user.getRole());

			userService.update(_user);
			userResponse.setUser(_user);
			return new ResponseEntity<>(userResponse, HttpStatus.OK);
		} catch (Exception e) {
			UserResponse userResponse = new UserResponse();
			userResponse.setMessage(e.getMessage());
			return new ResponseEntity<>(userResponse, HttpStatus.BAD_REQUEST);
		}
	}
}
