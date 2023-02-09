package com.nocountry.cleanreactive.responses;

import java.util.List;

import com.nocountry.cleanreactive.model.User;

public class UsersResponse {
    private List<User> users;
    private String message;

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}