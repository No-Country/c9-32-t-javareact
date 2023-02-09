package com.nocountry.cleanreactive.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.validation.constraints.Email;
import lombok.Data;

@Data
@Document(collection = "user")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class User {
	@Id
	private String id;
	private String password;
	private String name;
	@Email
	private String email;
	private String address;
	private String phoneNumber;

	public User(String password, String name, String email, String address, String phoneNumber) {
		this.password = password;
		this.name = name;
		this.email = email;
		this.address = address;
		this.phoneNumber = phoneNumber;
	}
}
