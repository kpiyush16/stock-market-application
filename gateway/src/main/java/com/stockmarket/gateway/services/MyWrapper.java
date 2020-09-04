package com.stockmarket.gateway.services;

import org.springframework.security.core.userdetails.User;

public class MyWrapper {
    private User user;
    private String password;

    public MyWrapper() {
    }

    public MyWrapper(User user, String password) {
        this.user = user;
        this.password = password;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    

    
}
