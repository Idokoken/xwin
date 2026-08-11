package com.ndgroups.xwin.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class ChangeUsernameRequest {

    @Schema(description = "Current username", example = "dieunie123")
    private String currentUserName;

    @Schema(description = "New username, must be unique", example = "dieunie.dev")
    private String newUserName;
}
