package com.nocountry.cleanreactive.responses;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthenticationResponse {
    private String token;
    private String message;
}
