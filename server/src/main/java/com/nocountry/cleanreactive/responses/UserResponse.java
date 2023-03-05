package com.nocountry.cleanreactive.responses;

import com.nocountry.cleanreactive.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    private User user;
    private String message;
}