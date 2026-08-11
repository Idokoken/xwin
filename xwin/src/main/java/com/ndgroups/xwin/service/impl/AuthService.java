package com.ndgroups.xwin.service.impl;

import com.ndgroups.xwin.Enum.USER_ROLE;
import com.ndgroups.xwin.config.JwtProvider;
import com.ndgroups.xwin.emailService.EmailService;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.repository.UserRepository;
import com.ndgroups.xwin.request.LoginRequest;
import com.ndgroups.xwin.request.RegisterUserRequest;
import com.ndgroups.xwin.service.Interfcae.IAuthService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.time.LocalDateTime;


@Service
public class AuthService implements IAuthService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private EmailService emailService;



    @Override
    public User registerUser(RegisterUserRequest request) throws MessagingException,
            UnsupportedEncodingException {
        User existingUser = userRepository.findByEmail(request.getEmail());
        if (existingUser != null) {
            if (existingUser.getIsVerified()) {
                throw new IllegalArgumentException("Email already exists");
            }
            // Unverified account — resend fresh verification email
            String newToken = java.util.UUID.randomUUID().toString();
            existingUser.setVerificationToken(newToken);
            existingUser.setTokenExpiry(LocalDateTime.now().plusHours(24));
            userRepository.save(existingUser);
            emailService.sendVerificationEmail(existingUser.getEmail(), newToken);
            return existingUser;
        }

        // Validate password strength
        if (!isStrongPassword(request.getPassword())) {
            throw new IllegalArgumentException(
                    "Password must be at least 6 characters long and include at least one letter, one number, and one special character.");
        }

        String token = java.util.UUID.randomUUID().toString();
        String encodedPassword = passwordEncoder.encode(request.getPassword());
        LocalDateTime now = LocalDateTime.now();

        User savedUser;

        if (request.getRole() == USER_ROLE.ROLE_CUSTOMER) {
            // Create Buyer profile + Cart in one go
            User user = new User();
            user.setUsername(request.getUsername());
            user.setEmail(request.getEmail());
            user.setPassword(encodedPassword);
            user.setPhone(request.getPhone());
            user.setRole(USER_ROLE.ROLE_CUSTOMER);
            user.setCreated_at(now);
            user.setIsVerified(false);
            user.setVerificationToken(token);
            user.setTokenExpiry(now.plusHours(24));

            savedUser = userRepository.save(user);
        } else {
            User user = new User();
            user.setUsername(request.getUsername());
            user.setEmail(request.getEmail());
            user.setPassword(encodedPassword);
            user.setPhone(request.getPhone());
            user.setRole(request.getRole());
            user.setCreated_at(now);
            user.setIsVerified(false);
            user.setVerificationToken(token);
            user.setTokenExpiry(now.plusHours(24));

            savedUser = userRepository.save(user);
        }
        emailService.sendVerificationEmail(savedUser.getEmail(), savedUser.getVerificationToken());

        return savedUser;
    }

    @Override
    public User login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail());
        if (user == null) {
            return null;
        }

        if (user.isSuspended()) {
            throw new IllegalArgumentException("Account Suspended");
        }

        if (user.isDeleted()) {
            throw new IllegalArgumentException("Account Deleted");
        }

        if (!user.getIsVerified()) {
            if (user.getRole() == USER_ROLE.ROLE_ADMIN) {
                user.setIsVerified(true);
                userRepository.save(user);
            } else {
                throw new IllegalArgumentException("Email not verified");
            }
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid credentials");
        }

        return user;
    }

    private boolean isStrongPassword(String password) {
        String pattern = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@#$%^&+=!.,?]).{6,}$";
        return password != null && password.matches(pattern);
    }


}
