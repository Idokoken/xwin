package com.ndgroups.xwin.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.ndgroups.xwin.Enum.USER_ROLE;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String email;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private String phone;
    private USER_ROLE role = USER_ROLE.ROLE_CUSTOMER;

    private LocalDateTime created_at;
    private LocalDateTime updated_at;
    @Column(name = "profile_picture")
    private String profilePicture;
    // Track whether the user has verified their email
    @Column(nullable = false)
    private boolean isVerified = false;

    // Store the verification token
    private String verificationToken;

    // Store token expiry date/time
    private LocalDateTime tokenExpiry;

    private LocalDateTime lastLogin;

    private String resetOtp;
    private LocalDateTime resetOtpExpiry;

    @Column(nullable = false)
    private boolean isSuspended = false;

    @Column(nullable = false)
    private boolean isDeleted = false;

//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Order>orders;

    public String getLoginEmail() {
        return email;
    }

    public void setIsVerified(boolean b) {
        isVerified = b;
    }

    public boolean getIsVerified() {
        return isVerified;
    }

//    public Integer getId() {
//        return id;
//    }
//
//    public void setId(Integer id) {
//        this.id = id;
//    }
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setUsername(String username) {
//        this.username = username;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public USER_ROLE getRole() {
//        return role;
//    }
//
//    public void setRole(USER_ROLE role) {
//        this.role = role;
//    }
//
//    public List<Booking> getBookings() {
//        return bookings;
//    }
//
//    public void setBookings(List<Booking> bookings) {
//        this.bookings = bookings;
//    }
}
