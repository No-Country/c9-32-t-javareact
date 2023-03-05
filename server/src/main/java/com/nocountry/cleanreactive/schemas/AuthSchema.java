package com.nocountry.cleanreactive.schemas;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthSchema {

    @Schema(example = "John Doe")
    private String name;

    @Schema(example = "johnDoe@gmail.com")
    private String email;

    @Schema(example = "myPassword")
    private String password;

    @Schema(example = "123 Main St.")
    private String address;

    @Schema(example = "555-555-5555")
    private String phoneNumber;
}