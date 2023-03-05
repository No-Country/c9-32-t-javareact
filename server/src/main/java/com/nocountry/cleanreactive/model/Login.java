package com.nocountry.cleanreactive.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Login {
    @Email
    @NotNull(message = "email cannot be null")
    @Schema(example = "johnDoe@gmail.com")
    private String email;

    @NotNull(message = "password cannot be null")
    @Schema(example = "myPassword")
    private String password;
}
