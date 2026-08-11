package com.ndgroups.xwin.controller;

import com.ndgroups.xwin.Exception.AlreadyExistException;
import com.ndgroups.xwin.Exception.ResourceNotFoundException;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.request.CreateUserRequest;
import com.ndgroups.xwin.response.ApiResponseDto;
import com.ndgroups.xwin.service.Interfcae.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/users")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private IUserService userService;

    @PostMapping("/add")
    public ResponseEntity<ApiResponseDto<User>> createUser(@RequestBody CreateUserRequest request) {
        try {
            User user = userService.createUser(request);
            return ResponseEntity.ok(new ApiResponseDto<>(true, HttpStatus.OK.value(), user,
                    "user successfully created"));
        } catch (AlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new ApiResponseDto<>(false, HttpStatus.CONFLICT.value(),
                            null,e.getMessage()));
        }
    }

    @GetMapping("/{userId}")
    public ResponseEntity<ApiResponseDto<User>> getUserById(@PathVariable Integer userId) {
        try {
            User user = userService.getUserById(userId);
            return ResponseEntity.ok(new ApiResponseDto<>(true, HttpStatus.OK.value(), user,
                    "success"));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null,e.getMessage()));
        }
    }

    @GetMapping("/all")
    public ResponseEntity<ApiResponseDto<List<User>>> getAllUsers() {
        try {
            List<User> users = userService.getAllUsers();
//            UserDTO userDto = userService.convertUserToDto(user);
            return ResponseEntity.ok(new ApiResponseDto<>(true, HttpStatus.OK.value(), users,
                    "success"));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null,e.getMessage()));
        }
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<ApiResponseDto<User>> updateUser(@PathVariable Integer id,
                                                           @RequestBody User request) {
        try {
            User user = userService.updateUser(id, request);
            return ResponseEntity.ok(new ApiResponseDto<>(true, HttpStatus.OK.value(), user,
                    "user successfully created"));
        } catch (AlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new ApiResponseDto<>(false, HttpStatus.CONFLICT.value(),
                            null,e.getMessage()));
        }
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<ApiResponseDto<?>> deleteUser(@PathVariable  Integer userId) {
        try {
            userService.deleteUser(userId);
            return ResponseEntity.ok(new ApiResponseDto<>(true, HttpStatus.OK.value(), null,
                    "user successfully deleted"));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null,e.getMessage()));
        }
    }

    @GetMapping("/info")
    public ResponseEntity<ApiResponseDto<User>> getUserInfo(@RequestParam String email) throws Exception {
        try {
            User user = userService.getUserInfo(email);
            return ResponseEntity.ok(new ApiResponseDto<>(true, HttpStatus.OK.value(), user,
                    "success"));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null,e.getMessage()));
        }
    }

    @GetMapping("/name")
    public ResponseEntity<ApiResponseDto<List<User>>> findByUsername(@RequestParam String username) {
        try {
            List<User> users = userService.findByUsername(username);
            return ResponseEntity.ok(new ApiResponseDto<>(true, HttpStatus.OK.value(), users,
                    "user successfully fetched"));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null,e.getMessage()));
        }
    }

    @GetMapping("/profile")
    private ResponseEntity<User>findUserByJwtToken(@RequestHeader("Authorization") String jwt) throws
            Exception {
        User user = userService.findUserByJwtToken(jwt);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/email")
    private ResponseEntity<User>findUserByEmail(@RequestParam String email) throws Exception {
        User user = userService.findUserByEmail(email);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }


}
