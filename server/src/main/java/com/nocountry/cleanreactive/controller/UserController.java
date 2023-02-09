package com.nocountry.cleanreactive.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.cleanreactive.exceptions.UserNotFoundException;
import com.nocountry.cleanreactive.model.User;
import com.nocountry.cleanreactive.responses.UserResponse;
import com.nocountry.cleanreactive.responses.UsersResponse;
import com.nocountry.cleanreactive.schemas.UserSchema;
import com.nocountry.cleanreactive.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "api/v1/users")
public class UserController {

	private final UserService userService;

	@Operation(summary = "Save user", description = "Save user to the database", tags = { "user" })
	@io.swagger.v3.oas.annotations.parameters.RequestBody(content = @Content(schema = @Schema(implementation = UserSchema.class)))
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Successful Operation", content = @Content(schema = @Schema(implementation = UserSchema.class))),
			@ApiResponse(responseCode = "400", description = "Bad Request", content = @Content(schema = @Schema(defaultValue = "Bad Request"))) })
	@PostMapping
	public ResponseEntity<UserResponse> save(@Valid @RequestBody User user) {
		try {
			userService.save(user);
			UserResponse response = new UserResponse();
			response.setUser(user);
			return new ResponseEntity<>(response, HttpStatus.CREATED);
		} catch (Exception e) {
			UserResponse response = new UserResponse();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}
	}

	@Operation(summary = "Get users", description = "Fetch users from the database", tags = { "user" })
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Successful Operation", content = @Content(schema = @Schema(implementation = UserSchema.class))),
			@ApiResponse(responseCode = "404", description = "Not Found Resources", content = @Content(schema = @Schema(defaultValue = "Not found users"))) })
	@GetMapping
	public ResponseEntity<UsersResponse> findAll() {
		try {
			List<User> users = userService.findAll();
			UsersResponse response = new UsersResponse();
			response.setUsers(users);

			if (users.size() > 0) {
				return new ResponseEntity<>(response, HttpStatus.OK);
			}
			throw new UserNotFoundException("Not found users");
		} catch (Exception e) {
			UsersResponse response = new UsersResponse();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Get user By Id", description = "Fetch user from the database", tags = { "user" })
	@ApiResponses(value = {
			@ApiResponse(responseCode = "302", description = "Successful Operation", content = @Content(schema = @Schema(implementation = UserSchema.class))),
			@ApiResponse(responseCode = "404", description = "Not Found Resource", content = @Content(schema = @Schema(defaultValue = "Not found user"))) })
	@GetMapping(path = "{id}")
	public ResponseEntity<UserResponse> findById(@PathVariable String id) {
		try {
			Optional<User> user = userService.findById(id);
			UserResponse response = new UserResponse();
			response.setUser(user.get());
			return new ResponseEntity<>(response, HttpStatus.FOUND);
		} catch (Exception e) {
			UserResponse response = new UserResponse();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Delete User By Id", description = "Delete user from the database", tags = { "user" })
	@ApiResponses(value = {
			@ApiResponse(responseCode = "204", description = "Successful Operation", content = @Content(schema = @Schema(defaultValue = "null"))),
			@ApiResponse(responseCode = "404", description = "Not Found Resource", content = @Content(schema = @Schema(defaultValue = "Not found user"))) })
	@DeleteMapping(path = "{id}")
	public ResponseEntity<UserResponse> deleteById(@PathVariable String id) {
		try {
			UserResponse response = new UserResponse();
			Optional<User> user = userService.findById(id);
			userService.deleteById(user.get().getId());
			response.setUser(null);
			return new ResponseEntity<>(response, HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			UserResponse response = new UserResponse();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Update user", description = "Update user to the database", tags = { "user" })
	@io.swagger.v3.oas.annotations.parameters.RequestBody(content = @Content(schema = @Schema(implementation = UserSchema.class)))
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Successful Operation", content = @Content(schema = @Schema(implementation = UserSchema.class))),
			@ApiResponse(responseCode = "404", description = "Not Found Resources", content = @Content(schema = @Schema(defaultValue = "Not found user"))) })
	@PutMapping("update")
	public ResponseEntity<UserResponse> update(@Valid @RequestBody User user) {
		try {
			UserResponse userResponse = new UserResponse();

			User _user = userService.findById(user.getId())
					.orElse(null);

			if (_user == null) {
				throw new UserNotFoundException("Not found user with the id " + user.getId());
			}

			userResponse.setUser(_user);

			_user.setName(user.getName());
			_user.setEmail(user.getEmail());
			_user.setPassword(user.getPassword());
			_user.setAddress(user.getAddress());
			_user.setPhoneNumber(user.getPhoneNumber());

			return new ResponseEntity<>(userResponse, HttpStatus.OK);
		} catch (Exception e) {
			UserResponse userResponse = new UserResponse();
			userResponse.setMessage(e.getMessage());
			return new ResponseEntity<>(userResponse, HttpStatus.BAD_REQUEST);
		}
	}
}
