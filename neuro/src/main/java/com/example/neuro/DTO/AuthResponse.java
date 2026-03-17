package com.example.neuro.DTO;

import com.example.neuro.model.Role;

public record AuthResponse(String token, Role role, String message) {}
