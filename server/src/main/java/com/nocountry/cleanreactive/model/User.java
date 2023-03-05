package com.nocountry.cleanreactive.model;

import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Document(collection = "user")
public class User implements UserDetails {
	@Id
	private String id;

	@NotNull(message = "name cannot be null")
	@Schema(example = "John Doe")
	private String name;

	@Email
	@NotNull(message = "email cannot be null")
	@Schema(example = "johnDoe@gmail.com")
	private String email;

	@JsonIgnore
	@NotNull(message = "password cannot be null")
	@Schema(example = "myPassword")
	private String password;

	@Schema(example = "123 Main St.")
	private String address;

	@Schema(example = "555-555-5555")
	private String phoneNumber;

	@Schema(example = "USER")
	private String role;

	@Schema(example = "image.png")
	private String image;

	@Override
	@JsonIgnore
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of(new SimpleGrantedAuthority(role));
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	@JsonIgnore
	public String getUsername() {
		return email;
	}

	@Override
	@JsonIgnore
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isEnabled() {
		return true;
	}
}
