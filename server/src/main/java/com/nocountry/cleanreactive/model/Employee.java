package com.nocountry.cleanreactive.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "employees")
public class Employee {

	@Id
	private String Id;
	private String name;
	private String email;
	private String password;
	private String address;
	private String phoneNumber;
	private Boolean state; // (por ejemplo, disponible, no disponible, etc.)
}
