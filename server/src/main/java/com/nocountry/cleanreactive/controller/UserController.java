package com.nocountry.cleanreactive.controller;

import java.util.List;

import com.nocountry.cleanreactive.model.User;
import com.nocountry.cleanreactive.service.UserService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class UserController {

	private final UserService userService;
	
	@PostMapping("/users")
	public void save(@RequestBody User user) {
		userService.save(user);
	}
	
	@GetMapping("/users")
	public List<User> findAll() {
		return userService.findAll();
	}
	
	@GetMapping("/user/{id}")
	public User findById(@PathVariable String id) {
		return userService.findById(id).get();
	}
	
	@DeleteMapping("/user/{id}")
	public void deleteById(@PathVariable String id) {
		userService.deleteById(id);
	}
	
	@PutMapping("/users")
	public void update(@RequestBody User user) {
		userService.save(user);
	}
}
