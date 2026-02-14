package com.example.neuro.controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.neuro.model.SignupRequest;
import com.example.neuro.services.UserService;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to the NeuroFleet API!";
    }

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest request) {
        return userService.registerUser(request);
    }

}
