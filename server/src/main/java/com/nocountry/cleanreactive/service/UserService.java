package com.nocountry.cleanreactive.service;

import java.util.List;
import java.util.Optional;

import com.nocountry.cleanreactive.model.User;
import com.nocountry.cleanreactive.repository.UserRepository;
import org.springframework.stereotype.Service;




import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	
	private final UserRepository userRepository;
	
	
	public void save(User user) {
		userRepository.save(user);
	}
	
	public List<User> findAll() {
		return userRepository.findAll();
	}
	
	public Optional<User> findById(String id) {
		return userRepository.findById(id);
	}
	
	public void deleteById(String id) {
		userRepository.deleteById(id);
	}
	
}
