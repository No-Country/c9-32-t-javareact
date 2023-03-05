package com.nocountry.cleanreactive.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.cleanreactive.model.Login;
import com.nocountry.cleanreactive.model.Register;
import com.nocountry.cleanreactive.schemas.AuthSchema;
import com.nocountry.cleanreactive.service.AuthService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/auth")
public class AuthController {

    private final AuthService authService;

    @Operation(summary = "Register user", description = "Register user to the database", tags = { "auth" })
    @io.swagger.v3.oas.annotations.parameters.RequestBody(content = @Content(schema = @Schema(implementation = AuthSchema.class)))
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Register request) {
        try {
            return new ResponseEntity<>(authService.register(request), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "Login user", description = "Login user and generate token", tags = { "auth" })
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Login request) {
        try {
            return new ResponseEntity<>(authService.authentication(request), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
