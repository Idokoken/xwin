package com.ndgroups.xwin.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping
    public String getUser() {
        return "good to go";
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllUser() {
//        return new ResponseEntity<List<String>>(new String {"he","ken","hii"}, HttpStatus.OK);
        return null;
    }
}
