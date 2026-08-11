package com.ndgroups.xwin.service.Interfcae;

import com.ndgroups.xwin.Enum.ORDER_TYPE;
import com.ndgroups.xwin.model.Coin;
import com.ndgroups.xwin.model.Order;
import com.ndgroups.xwin.model.OrderItem;
import com.ndgroups.xwin.model.User;

import java.util.List;

public interface IOrderService {
    Order createOrder(User user, OrderItem orderItem, ORDER_TYPE type);
    Order getOrderById(Integer id) throws Exception;
    List<Order> getAllOrdersOfUser(Integer userId, ORDER_TYPE type, String assetSymbol);
    Order processOrder(Coin coin, double quantity, ORDER_TYPE type, User user) throws Exception;

}