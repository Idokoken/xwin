package com.ndgroups.xwin.service.impl;

import com.ndgroups.xwin.Enum.ORDER_STATUS;
import com.ndgroups.xwin.Enum.ORDER_TYPE;
import com.ndgroups.xwin.model.*;
import com.ndgroups.xwin.repository.OrderItemRepository;
import com.ndgroups.xwin.repository.OrderRepository;
import com.ndgroups.xwin.service.Interfcae.IAssetService;
import com.ndgroups.xwin.service.Interfcae.IOrderService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private WalletService walletService;
    @Autowired
    private OrderItemRepository orderItemRepository;
    @Autowired
    private IAssetService assetService;

    @Override
    public Order createOrder(User user, OrderItem orderItem, ORDER_TYPE type) {
        double price = orderItem.getCoin().getCurrentPrice() * orderItem.getQuantity();

        Order order = new Order();
        order.setUser(user);
        order.setOrderItem(orderItem);
        order.setOrderType(type);
        order.setPrice(BigDecimal.valueOf(price));
        order.setTimestamp(LocalDateTime.now());
        order.setOrderStatus(ORDER_STATUS.PENDING);

        return orderRepository.save(order);
    }

    @Override
    public Order getOrderById(Integer id) throws Exception {
        return orderRepository.findById(id)
                .orElseThrow(() -> new Exception("Order with Id not found"));
    }

    @Override
    public List<Order> getAllOrdersOfUser(Integer userId, ORDER_TYPE type, String assetSymbol) {
        return List.of();
    }

    @Override
    @Transactional
    public Order processOrder(Coin coin, double quantity, ORDER_TYPE orderType, User user) throws Exception {
        if(orderType.equals(ORDER_TYPE.BUY)){
            return buyAsset(coin, quantity, user);
        } else if (orderType.equals(ORDER_TYPE.SELL)) {
            return sellAsset(coin, quantity, user);
        }
        throw new Exception("invalid order type");
    }

    private OrderItem createOrderItem(Coin coin, double quantity, double buyPrice, double sellPrice){
        OrderItem orderItem = new OrderItem();
        orderItem.setCoin(coin);
        orderItem.setQuantity(quantity);
        orderItem.setBuyPrice(buyPrice);
        orderItem.setSellPrice(sellPrice);

        return orderItemRepository.save(orderItem);
    }
   @Transactional
    public  Order buyAsset(Coin coin, double quantity, User user) throws Exception {
        if (quantity <= 0){
            throw new Exception("quantity should be > 0");
        }
        double buyPrice = coin.getCurrentPrice();

        OrderItem orderItem = createOrderItem(coin, quantity, buyPrice, 0);

        Order order = createOrder(user, orderItem, ORDER_TYPE.BUY);
        orderItem.setOrder(order);

        walletService.payOrderPayment(order, user);

        order.setOrderStatus(ORDER_STATUS.SUCCESS);
        order.setOrderType(ORDER_TYPE.BUY);

        Order savedOrder = orderRepository.save(order);

//        Create Asset
       Asset oldAsset = assetService.findAssetByUserIdAndCoinId(
               order.getUser().getId(),
               order.getOrderItem().getCoin().getId());

       if (oldAsset == null){
           assetService.createAsset(user, orderItem.getCoin(), orderItem.getQuantity());
       } else {
           assetService.updateAsset(oldAsset.getId(), quantity);
       }

       return savedOrder;
    }

    @Transactional
    public  Order sellAsset(Coin coin, double quantity, User user) throws Exception {
        if (quantity <= 0){
            throw new Exception("quantity should be > 0");
        }
        double sellPrice = coin.getCurrentPrice();
        Asset assetToSell =  assetService.findAssetByUserIdAndCoinId(user.getId(), coin.getId());
        double buyPrice = assetToSell.getBuyPrice();
        if (assetToSell != null){
            OrderItem orderItem = createOrderItem(coin, quantity, buyPrice, sellPrice);

        Order order = createOrder(user, orderItem, ORDER_TYPE.SELL);
        orderItem.setOrder(order);

        if(assetToSell.getQuantity() >= quantity){
            order.setOrderStatus(ORDER_STATUS.SUCCESS);
            order.setOrderType(ORDER_TYPE.SELL);
            Order savedOrder = orderRepository.save(order);
            walletService.payOrderPayment(order, user);

            Asset updatedAsset = assetService.updateAsset(assetToSell.getId(), -quantity);

            if (updatedAsset.getQuantity() * coin.getCurrentPrice() <= 1){
                assetService.deleteAsset(updatedAsset.getId());
            }
            return savedOrder;
        }
        throw new Exception("insufficient quantity to sell");
        }
        throw new Exception("Asset not found");
    }


}
