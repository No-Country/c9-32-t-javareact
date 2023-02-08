package com.nocountry.cleanreactive.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document
@Data
public class User {
	@Id
	private String id;
	private String password;
	private String name;
	private String email;
	private String address;
	private Integer phoneNumber;
	
	

}
