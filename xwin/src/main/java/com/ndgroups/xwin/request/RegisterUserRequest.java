package com.ndgroups.xwin.request;

import com.ndgroups.xwin.Enum.USER_ROLE;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterUserRequest {
    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
    private String username;
    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;
    @NotBlank(message = "Email is required")
    @Email(message = "Please provide a valid email address")
    private String email;
    @Size(min = 10, max = 15, message = "Phone number must be 10-15 digits")
    private String phone;
//    @Schema(hidden = true)
    private USER_ROLE role = USER_ROLE.ROLE_CUSTOMER;
}
