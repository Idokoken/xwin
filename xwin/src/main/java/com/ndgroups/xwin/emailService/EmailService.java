package com.ndgroups.xwin.emailService;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

@Service
@RequiredArgsConstructor
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;
    @Value("${app.backend.url}")
    private String backendUrl;

    @Async
    public void sendPasswordResetOtp(String to, String otp) {
        try {
            String subject = "Password Reset OTP";
            String body = "You requested to reset your password.\n\n"
                    + "Your OTP is: " + otp + "\n\n"
                    + "This OTP will expire in 10 minutes.\n"
                    + "If you did not request this, please ignore this email.";

            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to);
            message.setSubject(subject);
            message.setText(body);
            message.setFrom("idokobryan01@gmail.com");

            mailSender.send(message);
            System.out.println("Password reset OTP sent to: " + to);
        } catch (Exception e) {
            System.err.println("❌ Failed to send OTP email to " + to + ". Error: " + e.getMessage());
        }
    }

    @Async
    public void sendVerificationEmail(String to, String token) {

        try {
            // Use localhost link for development/testing
             String link = "http://localhost:8080/auth/verify?token=" + token;
//            String link = "https://xwin.onrender.com/auth/verify?token=" + token;

            String subject = "Verify your email";
            String body = "Thank you for registering.\n\n"
                    + "Please click the link below to verify your email:\n"
                    + link + "\n\n"
                    + "This link will expire in 24 hours.";

            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to);  // Your own Gmail for testing
            message.setSubject(subject);
            message.setText(body);

            // Use your development no-reply email
            message.setFrom("idokobryan01@gmail.com");

            mailSender.send(message);
            System.out.println("Verification email sent to: " + to);
        }
        catch (Exception e) {
            System.err.println("❌ Failed to send email to " + to + ". Error: " + e.getMessage());
        }
    }

    //    Send Notification Email on Account Creation
    @Async
    public void sendAccountCreationNotificationEmail(String toEmail, String username)
            throws MessagingException, UnsupportedEncodingException {
//        SimpleMailMessage message = new SimpleMailMessage();
//
//        message.setTo(toEmail);
//        message.setSubject("Welcome to PiTravel");
//        message.setText(
//                "Hello " + username + ",\n\n" +
//                        "Your account has been created successfully.\n\n" +
//                        "Easily Book your local and international flight \n\n" +
//                        "We are here to move you round the world!"
//        );
//
//        mailSender.send(message);
//        System.out.println("Welcome email sent to: " + toEmail);



        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        String fromEmail = "idokobryan01@gmail.com";
        String senderName = "Xwin App";
        String messageBody = "Hello " + username + ",\n\n" +
                "Your account has been created successfully.\n\n" +
                "Easily Invest in Crypto currency \n\n" +
                "We are here to help you trade, save money and grow your wealth!";

        helper.setFrom(fromEmail, senderName);

        helper.setTo(toEmail);
        helper.setSubject("Welcome Xwin");
        helper.setText(messageBody, true);   // true = HTML

        mailSender.send(message);
        System.out.println("Welcome email sent to: " + toEmail);


    }
}