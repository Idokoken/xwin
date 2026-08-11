package com.ndgroups.xwin.response;

import com.ndgroups.xwin.Enum.USER_ROLE;
import lombok.Data;

@Data
public class AuthResponse {
    private String jwt;
    private String message;
    private USER_ROLE role;
}
