package com.ndgroups.xwin.request;

import com.ndgroups.xwin.Enum.USER_ROLE;
import lombok.Data;


@Data
public class CreateUserRequest {
    private String username;
    private String email;
    private String password;
    private String phone;
    private USER_ROLE role = USER_ROLE.ROLE_CUSTOMER;

}
