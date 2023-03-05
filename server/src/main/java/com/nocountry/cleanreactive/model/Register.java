package com.nocountry.cleanreactive.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Register {
    @NotNull(message = "name cannot be null")
    @Schema(example = "John Doe")
    private String name;

    @Email
    @NotNull(message = "email cannot be null")
    @Schema(example = "johnDoe@gmail.com")
    private String email;

    @NotNull(message = "password cannot be null")
    @Schema(example = "myPassword")
    private String password;

    @Schema(example = "123 Main St.")
    private String address;

    @Schema(example = "555-555-5555")
    private String phoneNumber;

    @Schema(example = "USER")
    private String role;
}
