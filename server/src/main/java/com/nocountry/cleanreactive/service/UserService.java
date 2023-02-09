package com.nocountry.cleanreactive.service;

import java.util.List;
import java.util.Optional;

import com.nocountry.cleanreactive.exceptions.BadRequestException;
import com.nocountry.cleanreactive.exceptions.UserNotFoundException;
import com.nocountry.cleanreactive.model.User;
import com.nocountry.cleanreactive.repository.UserRepository;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	private final UserRepository userRepository;

	public User save(User user) {
		Optional<User> existsEmail = userRepository.findByEmail(user.getEmail());

		if (existsEmail.isPresent()) {
			throw new BadRequestException("Email " + user.getEmail() + " taken");
		}
		return userRepository.save(user);
	}

	public User update(User user) {
		return userRepository.save(user);
	}

	public List<User> findAll() {
		return userRepository.findAll();
	}

	public Optional<User> findById(String id) {
		if (!userRepository.existsById(id)) {
			throw new UserNotFoundException("User with id " + id + " does not exists");
		}
		return userRepository.findById(id);
	}

	public Integer deleteById(String id) {
		if (!userRepository.existsById(id)) {
			throw new UserNotFoundException("User with id " + id + " does not exists");
		}
		userRepository.deleteById(id);
		return HttpStatus.NO_CONTENT.value();
	}
}
