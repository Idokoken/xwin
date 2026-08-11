package com.ndgroups.xwin.service.impl;

import com.ndgroups.xwin.Exception.AlreadyExistException;
import com.ndgroups.xwin.Exception.ResourceNotFoundException;
import com.ndgroups.xwin.config.JwtProvider;
import com.ndgroups.xwin.emailService.EmailService;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.repository.UserRepository;
import com.ndgroups.xwin.request.CreateUserRequest;
import com.ndgroups.xwin.service.Interfcae.IUserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private EmailService emailService;



    @Override
    public User createUser(CreateUserRequest request) {
        return Optional.of(request)
                .filter(user -> !userRepository.existsByEmail(request.getEmail()))
                .map(req -> {
                    User user = new User();
                    user.setUsername(request.getUsername());
                    user.setEmail(request.getEmail());
                    user.setPassword(passwordEncoder.encode(request.getPassword()));
                    user.setRole((request.getRole()));
                    return userRepository.save(user);
                }).orElseThrow(() -> new AlreadyExistException(request.getEmail() + " already exist"));
    }
//     if(user.getRole() == null || user.getRole().isBlank()){
//            user.setRole("USER");



    @Override
    public User getUserById(Integer userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("user not found with the given id " + userId));
    }

    @Override
    public User updateUser(Integer userId, User user) {
        Optional<User> optUser = userRepository.findById(userId);
        if(optUser.isPresent()){
            User existingUser  =  optUser.get();
            existingUser.setUsername(user.getUsername());
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(passwordEncoder.encode(user.getPassword()));

            userRepository.save(existingUser);
        }
        throw new ResourceNotFoundException("user not found");
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUser(Integer userId) {
        if(!userRepository.existsById(userId)){
            throw new ResourceNotFoundException("user not found with the given id");
        }
        userRepository.deleteById(userId);
    }

    @Override
    public User getUserInfo(String email) throws Exception {
        return userRepository.findByEmail(email);
//                    .orElseThrow(() -> new Exception("User not found"));
    }

    @Override
    public List<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User findUserByJwtToken(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt);
        User user = userRepository.findByEmail(email);
        if(user==null){
            throw new Exception("user not found");
        }
        return user;
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        return userRepository.findByEmail(email);
//                .orElseThrow(() -> new Exception("User not found"));
    }

    @Override
    public User getUserByUserId(Integer id) throws Exception{
        Optional<User> user = userRepository.findById(id);
        if(user.isEmpty()){
            throw new Exception("user not found with id " + id);
        }
        return user.get();
    }

    @Override
    public boolean changePassword(String email, String oldPassword, String newPassword) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return false;
        }

        if (!user.getIsVerified()) {
            throw new IllegalArgumentException("Email not verified");
        }

        // Verify old password
        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
            throw new IllegalArgumentException("Old password is incorrect");
        }

        // Validate new password
        if (!isStrongPassword(newPassword)) {
            throw new IllegalArgumentException("WEAK_PASSWORD");
        }

        // Update password
        user.setPassword(passwordEncoder.encode(newPassword));
        user.setUpdated_at(LocalDateTime.now());
        userRepository.save(user);
        return true;
    }

    private boolean isStrongPassword(String password) {
        String pattern = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@#$%^&+=!.,?]).{6,}$";
        return password != null && password.matches(pattern);
    }

    @Override
    public boolean verifyUserByToken(String token) {
        if (token == null || token.isEmpty())
            return false;

        // Find user by token
        User user = userRepository.findByVerificationToken(token).orElse(null);
        if (user == null)
            return false;

        // Check if token has expired
        if (user.getTokenExpiry() == null || user.getTokenExpiry().isBefore(LocalDateTime.now())) {
            return false;
        }

        // Activate user
        user.setIsVerified(true);
        user.setVerificationToken(null); // clear token
        user.setTokenExpiry(null); // clear expiry
        user.setUpdated_at(LocalDateTime.now());

        userRepository.save(user);
        return true;
    }

    @Override
    @Transactional
    public String leaveAccount(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new IllegalArgumentException("User not found");
        }

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new IllegalArgumentException("Invalid credentials");
        }

        // Check blockers
//        if (ordersRepository.existsByBuyerIdAndStatusIn(user.getId(),
//                List.of(OrderStatus.PENDING, OrderStatus.PROCESSING, OrderStatus.SHIPPED, OrderStatus.PAID))) {
//            return "BLOCKED: You have pending or active orders. Please wait until they are delivered or cancelled.";
//        }



        // Hard delete — manual deletes first to avoid FK constraint errors
//        if (user instanceof Buyer user) {
//
//                      recentlyViewedRepository.deleteByBuyer(user);
//            recommendationsRepository.deleteByUserId(user.getId());
//            savedProductsRepository.deleteByBuyerId(user.getId());
//            userRepository.delete(user);
//        } else {
//            myUserRepository.delete(user);
//        }
        userRepository.delete(user);
        return "SUCCESS";
    }

    @Override
    public boolean checkEmailExists(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public boolean isEmailVerified(String email) {
        User user = userRepository.findByEmail(email);
        return user != null && user.getIsVerified();
    }

    @Override
    public void sendPasswordResetOtp(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new IllegalArgumentException("No account found with this email");
        }

        if (!user.getIsVerified()) {
            throw new IllegalArgumentException("Please verify your email first");
        }

        String otp = String.format("%06d", new java.util.Random().nextInt(1000000));
        user.setResetOtp(otp);
        user.setResetOtpExpiry(LocalDateTime.now().plusMinutes(10));
        userRepository.save(user);

        emailService.sendPasswordResetOtp(email, otp);
    }

    @Override
    public void resetPassword(String email, String otp, String newPassword) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new IllegalArgumentException("No account found with this email");
        }

        if (!user.getIsVerified()) {
            throw new IllegalArgumentException("Please verify your email first");
        }

        if (user.getResetOtp() == null || !user.getResetOtp().equals(otp)) {
            throw new IllegalArgumentException("Invalid OTP");
        }

        if (user.getResetOtpExpiry() == null || user.getResetOtpExpiry().isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("OTP has expired");
        }

        if (!isStrongPassword(newPassword)) {
            throw new IllegalArgumentException(
                    "Password must be at least 6 characters long and include at least one letter, one number, and one special character.");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        user.setResetOtp(null);
        user.setResetOtpExpiry(null);
        user.setUpdated_at(LocalDateTime.now());
        userRepository.save(user);
    }



}