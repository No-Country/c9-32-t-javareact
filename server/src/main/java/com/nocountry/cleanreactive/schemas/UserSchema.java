package com.nocountry.cleanreactive.schemas;

import io.swagger.v3.oas.annotations.media.Schema;

public class UserSchema {
    @Schema(example = "5f2d15f88c5f2511c97a6eeb")
    private String id;

    @Schema(example = "myPassword")
    private String password;

    @Schema(example = "John Doe")
    private String name;

    @Schema(example = "johndoe@email.com")
    private String email;

    @Schema(example = "123 Main St.")
    private String address;

    @Schema(example = "555-555-5555")
    private String phoneNumber;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}