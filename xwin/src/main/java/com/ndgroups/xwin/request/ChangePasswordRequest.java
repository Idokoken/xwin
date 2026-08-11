package com.ndgroups.xwin.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class ChangePasswordRequest {

    @Schema(description = "User's email", example = "buyer@example.com")
    private String email;
    @Schema(description = "Current password", example = "oldPass123")
    private String oldPassword;

    @Schema(description = "New password", example = "newPass123!")
    private String newPassword;
}
