package com.nocountry.cleanreactive.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;
import com.nocountry.cleanreactive.exceptions.NotFoundException;
import com.nocountry.cleanreactive.model.User;
import com.nocountry.cleanreactive.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	@Autowired
	private GridFsOperations gridFsOperations;

	@Autowired
	private GridFsTemplate gridFsTemplate;

	private final UserRepository userRepository;

	// public User save(User user) {
	// Optional<User> existsEmail = userRepository.findByEmail(user.getEmail());

	// if (existsEmail.isPresent()) {
	// throw new BadRequestException("Email " + user.getEmail() + " taken");
	// }

	// user.setRole("USER");
	// return userRepository.save(user);
	// }

	public void UploadImage(MultipartFile image, String id) {
		User user = userRepository.findById(id).orElseThrow();

		Query query = new Query(Criteria.where("metadata.userId").is(user.getId()));
		GridFSFile existingImage = gridFsTemplate.findOne(query);

		if (existingImage != null) {
			gridFsTemplate.delete(query);
		}

		if (image != null && !image.isEmpty()) {
			try {
				String filename = user.getId() + "-" + image.getOriginalFilename();
				DBObject metadata = new BasicDBObject();
				metadata.put("userId", user.getId());
				ObjectId fileId = gridFsOperations.store(image.getInputStream(), filename, image.getContentType(),
						metadata);
				user.setImage(fileId.toString());
			} catch (IOException e) {
				throw new RuntimeException("Failed to save image for user " + user.getId(), e);
			}
		}
	}

	public User update(User user) {
		return userRepository.save(user);
	}

	public List<User> findAll() {
		return userRepository.findAll();
	}

	public Optional<User> findById(String id) {
		if (!userRepository.existsById(id)) {
			throw new NotFoundException("User with id " + id + " does not exists");
		}
		return userRepository.findById(id);
	}

	public Integer deleteById(String id) {
		if (!userRepository.existsById(id)) {
			throw new NotFoundException("User with id " + id + " does not exists");
		}
		userRepository.deleteById(id);
		return HttpStatus.NO_CONTENT.value();
	}
}
