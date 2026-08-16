package com.ndgroups.xwin.controller;

import com.ndgroups.xwin.model.*;
import com.ndgroups.xwin.response.ApiResponseDto;
import com.ndgroups.xwin.service.Interfcae.IPaymentOrderService;
import com.ndgroups.xwin.service.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/${api.prefix}/payment-order")
public class PaymentOrderController {
    @Autowired
    private IPaymentOrderService paymentOrderService;
    @Autowired
    private UserService userService;

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
