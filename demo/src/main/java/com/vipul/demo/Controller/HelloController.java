package com.vipul.demo.Controller;

import com.vipul.demo.model.User;

// import java.util.HashMap;
// import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello Spring Boot 🚀";
    }

    // @GetMapping("/user")
    // public Map<String, String> user(){
    // Map<String, String> data = new HashMap<>();
    // data.put("name", "Vipul");
    // data.put("email", "vipul@example.com");
    // return data;
    // }

    @PostMapping("/create-user")
    public User createUser(@RequestBody User user) {
        return user;
    }

}
