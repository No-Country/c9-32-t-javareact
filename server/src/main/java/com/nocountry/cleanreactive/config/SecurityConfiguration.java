package com.nocountry.cleanreactive.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeHttpRequests()
                .requestMatchers("/api-docs/**",
                        "/swagger-ui/**", "/swagger-resources/**", "/swagger.html")
                .permitAll()
                .requestMatchers("/api/v1/auth/**").permitAll()
                .requestMatchers("/api/v1/checkout/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/v1/serv-type/**").permitAll()
                .requestMatchers("/api/v1/serv-schedule/**").permitAll()
                .requestMatchers("/api/v1/users/images/**").permitAll()
                .requestMatchers("/api/v1/users/upload-image/**").permitAll()
                .requestMatchers("/api/v1/users/{id}").permitAll()
                .requestMatchers("/api/v1/users/**").hasAuthority("ADMIN").and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
