package com.nocountry.cleanreactive.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nocountry.cleanreactive.model.Employee;

public interface IEmployeeRepo extends MongoRepository<Employee, String>{

}
