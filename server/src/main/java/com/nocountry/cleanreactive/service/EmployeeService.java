package com.nocountry.cleanreactive.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.cleanreactive.model.Employee;
import com.nocountry.cleanreactive.repository.IEmployeeRepo;

@Service
public class EmployeeService {

	private final IEmployeeRepo repo;

	public EmployeeService(IEmployeeRepo repo) {
		this.repo = repo;
	}
	
	public void save(Employee employee) {
		repo.save(employee);
	}
	
	public List<Employee> findAll() {
		return repo.findAll();
	}
	
	public Optional<Employee> findById(String id) {
		return repo.findById(id);
	}
	
	public void deleteById(String id) {
		repo.deleteById(id);
	}
	
}
