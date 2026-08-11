package com.ndgroups.xwin.mapper;

import com.ndgroups.xwin.dto.UserDTO;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.request.CreateUserRequest;

public class UserMapper {
    public static User toUserEntity(CreateUserRequest request){
        if(request == null) return  null;
        return User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(request.getPassword())
                .phone(request.getPhone())
                .build();
    }

    public static UserDTO toUserDto(User user){
        if(user == null) return  null;
        return UserDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .phone(user.getPhone())
                .role(user.getRole())
                .build();
    }

    public static User updateUserEntity(User user, CreateUserRequest request) {
        if (request.getUsername() != null) {
            user.setUsername(request.getUsername().trim());
        }
        if (request.getEmail() != null) {
            user.setEmail(request.getEmail().toUpperCase().trim());
        }
        if (request.getPhone() != null) {
            user.setPhone(request.getPhone());
        }
        if (request.getRole() != null) {
            user.setRole(request.getRole());
        }

        return user;
    }


}
