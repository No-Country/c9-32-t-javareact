package com.nocountry.cleanreactive.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(value = "usuario")
@Data
public class Usuario {
	@Id
	private String id;
	private String usuario;
	private String password;
	private String nombre;
	private String apellido;
	private String email;
	private String direccion;
	private Integer telefono;
	private Boolean activo;
	

}
