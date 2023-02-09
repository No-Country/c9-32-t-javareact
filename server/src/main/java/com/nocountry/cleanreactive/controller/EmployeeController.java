package com.nocountry.cleanreactive.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.cleanreactive.model.Employee;
import com.nocountry.cleanreactive.service.EmployeeService;



@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

	private final EmployeeService service;

	public EmployeeController(EmployeeService service) {
		this.service = service;
	}
	
	@PostMapping("/employees")
	public void save(@RequestBody Employee employee) {
		service.save(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> findAll(){
		return service.findAll();
	}
	
	@GetMapping("/employees/{id}")
	public Optional<Employee> findById(@PathVariable("id") String id) {
		return service.findById(id);
	}
	
	@DeleteMapping("/employees/{id}")
	public void deleteById(@PathVariable("id") String id) {
		service.deleteById(id);
	}
	
	@PutMapping("/employee")
	public void update(@RequestBody Employee employee) {
		service.save(employee);
	}
}
