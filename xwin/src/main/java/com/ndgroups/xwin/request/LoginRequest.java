package com.ndgroups.xwin.request;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}

