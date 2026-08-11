package com.ndgroups.xwin.controller;

import com.ndgroups.xwin.config.JwtProvider;
import com.ndgroups.xwin.dto.UserDTO;
import com.ndgroups.xwin.emailService.EmailService;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.repository.UserRepository;
import com.ndgroups.xwin.request.*;
import com.ndgroups.xwin.response.APIResponse;
import com.ndgroups.xwin.response.ApiResponseDto;
import com.ndgroups.xwin.service.CustomUserDetailsService;
import com.ndgroups.xwin.service.Interfcae.IAuthService;
import com.ndgroups.xwin.service.Interfcae.IUserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
@Tag(name = "Auth", description = "User authentication and registration")
public class AuthController {
    @Autowired
    private IUserService userService;
    @Autowired
    private IAuthService authService;
    @Autowired
    private CustomUserDetailsService customUserDetailsService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private EmailService emailService;
    @Autowired
    private JwtProvider jwtProvider;


    @PostMapping("/signup")
    public ResponseEntity<ApiResponseDto<UserDTO>> registerUser(@RequestBody RegisterUserRequest request)
            throws Exception {
        try {
            User newUser = authService.registerUser(request);

//            Authentication authentication = new UsernamePasswordAuthenticationToken(newUser.getEmail(),
//                    newUser.getPassword());
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//
//            String jwt = jwtProvider.generateToken(authe v ntication);
//
//            AuthResponse response = new AuthResponse();
//            response.setJwt(jwt);
//            response.setMessage("registration successful, verify your email to complete your " +
//                    "registration");
//            response.setRole(newUser.getRole());
//            return new ResponseEntity<>(response, HttpStatus.CREATED);


            UserDTO userDTO = new UserDTO();
            userDTO.setId(newUser.getId());
            userDTO.setUsername(newUser.getUsername());
            userDTO.setEmail(newUser.getEmail());
            userDTO.setPhone(newUser.getPhone());
            userDTO.setRole(newUser.getRole());
            userDTO.setProfilePicture(newUser.getProfilePicture());
            userDTO.setCreated_at(newUser.getCreated_at());
            userDTO.setUpdated_at(newUser.getUpdated_at());

            // Send Notification email after successful account creation
            emailService.sendAccountCreationNotificationEmail(
                    newUser.getEmail(),
                    newUser.getUsername()
            );


            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(new ApiResponseDto<>(true, HttpStatus.CREATED.value(), userDTO,
                            "User registered successfully"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponseDto<>(false, HttpStatus.BAD_REQUEST.value(),
                            null, e.getMessage()));
        }

    }

    @PostMapping("/signin")
    public ResponseEntity<ApiResponseDto<UserDTO>>loginUser(@RequestBody LoginRequest request){
//        String username = request.getEmail();
//        String password = request.getPassword();
//        Authentication authentication = authenticate(username, password);
//
//        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
//        String role = authorities.isEmpty()?null:authorities.iterator().next().getAuthority();
//
//        String jwt = jwtProvider.generateToken(authentication);
//
//        AuthResponse response = new AuthResponse();
//        response.setJwt(jwt);
//        response.setMessage("login successful");
//        response.setRole(USER_ROLE.valueOf(role));
//        return new ResponseEntity<>(response, HttpStatus.OK);

        try {
            User user = authService.login(request);

            if (user == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                                null, "User not found"));
            }

            UserDTO userDto = new UserDTO();
            userDto.setId(user.getId());
            userDto.setUsername(user.getUsername());
            userDto.setEmail(user.getEmail());
            userDto.setPhone(user.getPhone());
            userDto.setRole(user.getRole());
            userDto.setProfilePicture(user.getProfilePicture());
            userDto.setCreated_at(user.getCreated_at());
            userDto.setUpdated_at(user.getUpdated_at());

            return ResponseEntity.ok(new ApiResponseDto<>(true, HttpStatus.OK.value(),
                    userDto, "Login successful"));

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponseDto<>(false, HttpStatus.BAD_REQUEST.value(),
                            null, e.getMessage()));
        }


    }

    //logout route
    @PostMapping("/logout")
    public  ResponseEntity<APIResponse> logout() {
        return ResponseEntity.ok(new APIResponse(
                "successfully logged out", null));
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(username);
        if(userDetails == null){
            throw new BadCredentialsException("invalid email...");
        }
        if(!passwordEncoder.matches(password, userDetails.getPassword())){
            throw new BadCredentialsException("invalid password...");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null,
                userDetails.getAuthorities());
    }


    @PostMapping("/change-password")
    @Operation(summary = "Change user password")
    public ResponseEntity<ApiResponseDto<Boolean>> changePassword(@RequestBody ChangePasswordRequest request) {
        try {
            boolean result = userService.changePassword(
                    request.getEmail(),
                    request.getOldPassword(),
                    request.getNewPassword()
            );

            if (!result) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(), false, "User not found"));
            }

            return ResponseEntity.ok(
                    new ApiResponseDto<>(true, HttpStatus.OK.value(), true, "Password changed successfully")
            );

        } catch (IllegalArgumentException e) {
            String errorMessage = e.getMessage();
            if ("WEAK_PASSWORD".equals(errorMessage)) {
                errorMessage = "Password must be at least 6 characters long and include at least one letter, one number, and one special character.";
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponseDto<>(false, HttpStatus.BAD_REQUEST.value(), false, errorMessage));
        }
    }

    @Operation(summary = "Check if email is registered",
            description = "Returns whether the email has an existing account. Use this to route between " +
                    "login and registration.")
    @PostMapping("/check-email")
    public ResponseEntity<ApiResponseDto<Boolean>> checkEmail(@RequestBody CheckEmailRequest request) {
        boolean exists = userService.checkEmailExists(request.getEmail());
        if (!exists) {
            return ResponseEntity.ok(new ApiResponseDto<>(true, HttpStatus.OK.value(), false, "No account found"));
        }
        boolean verified = userService.isEmailVerified(request.getEmail());
        return ResponseEntity.ok(new ApiResponseDto<>(true, HttpStatus.OK.value(), verified,
                verified ? "Account found" : "Account not verified. Check your email."));
    }

    @Operation(summary = "Verify user email")
    @GetMapping(value = "/verify", produces = "text/html")
    public ResponseEntity<String> verifyUser(@RequestParam String token) {
        boolean verified =userService.verifyUserByToken(token);

        String title   = verified ? "Email Verified!" : "Verification Failed";
        String icon    = verified ? "✅" : "❌";
        String message = verified
                ? "Your email has been verified successfully.<br>You can now log in to the app."
                : "This link is invalid or has expired.<br>Please register again or request a new verification email.";
        String color   = verified ? "#4CAF50" : "#f44336";

        String deepLinkScript = verified
                ? "window.location.href = 'pitravelapp://verified';"
                : "";

        String html = """
                <!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8"/>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                  <title>%s</title>
                  <style>
                    body { font-family: Arial, sans-serif; display: flex; justify-content: center;
                           align-items: center; height: 100vh; margin: 0; background: #f5f5f5; }
                    .card { background: white; padding: 40px; border-radius: 12px;
                            box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center; max-width: 400px; }
                    .icon { font-size: 60px; margin-bottom: 16px; }
                    h2 { color: %s; margin-bottom: 12px; }
                    p { color: #555; line-height: 1.6; }
                    .hint { font-size: 13px; color: #999; margin-top: 20px; }
                  </style>
                </head>
                <body>
                  <div class="card">
                    <div class="icon">%s</div>
                    <h2>%s</h2>
                    <p>%s</p>
                    <p class="hint">You can close this tab.</p>
                  </div>
                  <script>%s</script>
                </body>
                </html>
                """.formatted(title, color, icon, title, message, deepLinkScript);

        return ResponseEntity.ok()
                .header("Content-Type", "text/html; charset=UTF-8")
                .body(html);
    }


    @Operation(summary = "Leave / delete account",
            description = "Permanently deletes the account and all related data. Blocked if there are pending orders or open disputes.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Account deleted successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid credentials or blocked due to pending orders/disputes"),
            @ApiResponse(responseCode = "404", description = "User not found")
    })


    @DeleteMapping("/leave")
    public ResponseEntity<ApiResponseDto<String>> leaveAccount(@RequestBody LeaveAccountRequest request) {
        try {
            String result = userService.leaveAccount(request.getEmail(), request.getPassword());

            if (result.startsWith("BLOCKED:")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(new ApiResponseDto<>(false, HttpStatus.BAD_REQUEST.value(), null, result.substring(8).trim()));
            }

            return ResponseEntity.ok(
                    new ApiResponseDto<>(true, HttpStatus.OK.value(), null, "Account deleted successfully"));

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponseDto<>(false, HttpStatus.BAD_REQUEST.value(), null, e.getMessage()));
        }
    }


    @Operation(summary = "Send password reset OTP",
            description = "Sends a 6-digit OTP to the user's email. OTP is valid for 10 minutes.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OTP sent successfully"),
            @ApiResponse(responseCode = "404", description = "No account found with this email")
    })
    @PostMapping("/forgot-password")
    public ResponseEntity<ApiResponseDto<String>> forgotPassword(@RequestBody ForgotPasswordRequest request) {
        try {
            userService.sendPasswordResetOtp(request.getEmail());
            return ResponseEntity.ok(
                    new ApiResponseDto<>(true, HttpStatus.OK.value(), null, "OTP sent to your email"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(), null, e.getMessage()));
        }
    }


    @Operation(summary = "Reset password using OTP",
            description = "Resets the user's password after validating the OTP sent to their email.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Password reset successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid or expired OTP, or weak password")
    })
    @PostMapping("/reset-password")
    public ResponseEntity<ApiResponseDto<String>> resetPassword(@RequestBody ResetPasswordRequest request) {
        try {
            userService.resetPassword(request.getEmail(), request.getOtp(), request.getNewPassword());
            return ResponseEntity.ok(
                    new ApiResponseDto<>(true, HttpStatus.OK.value(), null, "Password reset successfully"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponseDto<>(false, HttpStatus.BAD_REQUEST.value(), null, e.getMessage()));
        }
    }




}
