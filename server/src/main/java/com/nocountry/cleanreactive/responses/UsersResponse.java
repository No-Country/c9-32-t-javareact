package com.nocountry.cleanreactive.responses;

import java.util.List;

import com.nocountry.cleanreactive.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UsersResponse {
    private List<User> users;
    private String message;
}