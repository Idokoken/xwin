package com.ndgroups.xwin.controller;

import com.ndgroups.xwin.Enum.ORDER_TYPE;
import com.ndgroups.xwin.model.*;
import com.ndgroups.xwin.request.OrderRequest;
import com.ndgroups.xwin.response.ApiResponseDto;
import com.ndgroups.xwin.service.Interfcae.ICoinService;
import com.ndgroups.xwin.service.Interfcae.IOrderService;
import com.ndgroups.xwin.service.Interfcae.IUserService;
import com.ndgroups.xwin.service.Interfcae.IWalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/${api.prefix}/orders")
public class OrderController {
    @Autowired
    private IOrderService orderService;
    @Autowired
    private IUserService userService;
    @Autowired
    private ICoinService coinService;
    @Autowired
    private IWalletService walletService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponseDto> createOrder(@RequestHeader("Authorization") String jwt,
                                                      @RequestBody OrderItem orderItem,
                                                      @RequestParam ORDER_TYPE type){
        try {
            User user = userService.findUserByJwtToken(jwt);
            Order order = orderService.createOrder(user, orderItem, type);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), order,
                            "order successfully created"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponseDto<>(false, HttpStatus.INTERNAL_SERVER_ERROR.value(),
                            null, e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponseDto> getOrderById(@RequestHeader("Authorization") String jwt,
                                                       @PathVariable Integer id) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Order order = orderService.getOrderById(id);
        if (order.getUser().getId().equals(user.getId())){
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), order,
                            "order successfully fetched"));
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(new ApiResponseDto<>(false, HttpStatus.FORBIDDEN.value(), null,
                            "user don't have access"));
        }
    }

    @PostMapping("/pay")
    public ResponseEntity<ApiResponseDto> processOrder(@RequestHeader("Authorization") String jwt,
                                                       @RequestBody OrderRequest req){
        try {
            User user = userService.findUserByJwtToken(jwt);
            Coin coin = coinService.getCoinById(req.getCoinId());
            Order order = orderService.processOrder(coin, req.getQuantity(), req.getOrderType(), user);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), order,
                            "order successfully placed"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<ApiResponseDto> getAllOrdersOfUser(@RequestHeader("Authorization") String jwt,
                                                       @RequestParam(required = false) ORDER_TYPE  order_type,
                                                             @RequestParam(required = false) String asset_symbol){
        try {
            User user = userService.findUserByJwtToken(jwt);
            List<Order> userOrders = orderService.getAllOrdersOfUser(user.getId(), order_type, asset_symbol);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), userOrders,
                            "user orders successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }


}
