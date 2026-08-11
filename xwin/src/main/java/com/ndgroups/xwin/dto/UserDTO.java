package com.ndgroups.xwin.dto;

import com.ndgroups.xwin.Enum.USER_ROLE;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
//@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDTO {
    private Integer id;
    private String username;
    private String email;
    private String phone;
    private USER_ROLE role;
    private String profilePicture;
    private LocalDateTime created_at;
    private LocalDateTime updated_at;

}
