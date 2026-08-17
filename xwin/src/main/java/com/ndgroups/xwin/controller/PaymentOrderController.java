package com.ndgroups.xwin.controller;

import com.ndgroups.xwin.Enum.PAYMENT_METHOD;
import com.ndgroups.xwin.model.*;
import com.ndgroups.xwin.response.ApiResponseDto;
import com.ndgroups.xwin.response.PaymentResponse;
import com.ndgroups.xwin.service.Interfcae.IPaymentOrderService;
import com.ndgroups.xwin.service.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/${api.prefix}/payment")
public class PaymentOrderController {
    @Autowired
    private IPaymentOrderService paymentOrderService;
    @Autowired
    private UserService userService;

    @PostMapping("/{paymentMethod}/amount/{amount}")
    public ResponseEntity<PaymentResponse> createOrder(@RequestHeader("Authorization") String jwt,
                                                      @PathVariable PAYMENT_METHOD paymentMethod,
                                                      @PathVariable Long amount) throws Exception {

            User user = userService.findUserByJwtToken(jwt);
            PaymentResponse paymentResponse;
            PaymentOrder order = paymentOrderService.createOrder(user, amount, paymentMethod);
            if (paymentMethod.equals(PAYMENT_METHOD.RAZORPAY)){
                paymentResponse = paymentOrderService.createRazorPaymentLink(user, amount);
            } else {
                paymentResponse = paymentOrderService.createStripePaymentLink(user, amount, order.getId());
            }

            return new ResponseEntity<>(paymentResponse, HttpStatus.CREATED);


    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponseDto> getPaymentOrderById(@RequestHeader("Authorization") String jwt,
                                                              @PathVariable Integer id) {
        try {
            User user = userService.findUserByJwtToken(jwt);
            PaymentOrder paymentOrder = paymentOrderService.getPaymentOrderById(id);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), paymentOrder,
                            "payment order successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }

    }


}
