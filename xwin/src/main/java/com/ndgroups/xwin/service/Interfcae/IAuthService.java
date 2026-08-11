package com.ndgroups.xwin.service.Interfcae;

import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.request.LoginRequest;
import com.ndgroups.xwin.request.RegisterUserRequest;
import jakarta.mail.MessagingException;

import java.io.UnsupportedEncodingException;

public interface IAuthService {
    User registerUser(RegisterUserRequest request) throws MessagingException, UnsupportedEncodingException;
    User login(LoginRequest request);
}
