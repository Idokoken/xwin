package com.ndgroups.xwin.controller;

import com.ndgroups.xwin.model.PaymentDetails;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.response.ApiResponseDto;
import com.ndgroups.xwin.service.Interfcae.IPaymentDetailsService;
import com.ndgroups.xwin.service.Interfcae.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/${api.prefix}/payment-details")
public class PaymentDetailsController {
    @Autowired
    private IPaymentDetailsService paymentDetailsService;
    @Autowired
    private IUserService userService;

    @PostMapping
    public ResponseEntity<ApiResponseDto> addPaymentDetail(@RequestHeader("Authorization") String jwt,
                                                           @RequestBody PaymentDetails paymentDetailsRequest) {
        try {
            User user = userService.findUserByJwtToken(jwt);
            PaymentDetails paymentDetails = paymentDetailsService.addPaymentDetails(
                    paymentDetailsRequest.getAccountNumber(),
                    paymentDetailsRequest.getAccountHolderName(),
                    paymentDetailsRequest.getIfsc(),
                    paymentDetailsRequest.getBankName(),
                    user
            );
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), paymentDetails,
                            "Payment successfully made"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponseDto<>(false, HttpStatus.INTERNAL_SERVER_ERROR.value(),
                            null, e.getMessage()));
        }

    }

    @GetMapping
    public ResponseEntity<ApiResponseDto> gePaymentByUserId(@RequestHeader("Authorization") String jwt) {
        try {
            User user = userService.findUserByJwtToken(jwt);
            PaymentDetails paymentDetails = paymentDetailsService.getUsersPaymentDetails(user);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), paymentDetails,
                            "user payment details successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }

    }


}
