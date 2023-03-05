package com.nocountry.cleanreactive.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nocountry.cleanreactive.config.JwtService;
import com.nocountry.cleanreactive.exceptions.BadRequestException;
import com.nocountry.cleanreactive.exceptions.NotFoundException;
import com.nocountry.cleanreactive.model.Login;
import com.nocountry.cleanreactive.model.Register;
import com.nocountry.cleanreactive.model.User;
import com.nocountry.cleanreactive.repository.UserRepository;
import com.nocountry.cleanreactive.responses.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(Register request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new BadRequestException("Email " + request.getEmail() + " taken");
        }

        User user = User.builder().name(request.getName()).email(request.getEmail()).address(request.getAddress())
                .phoneNumber(request.getPhoneNumber())
                .password(passwordEncoder.encode(request.getPassword())).role("USER")
                .build();

        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user, user.getId());
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authentication(Login request) {
        if (!userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new NotFoundException("User with email " + request.getEmail() + " does not exists");
        }

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user, user.getId());
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

}
