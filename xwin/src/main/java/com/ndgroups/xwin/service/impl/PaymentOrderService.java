package com.ndgroups.xwin.service.impl;

import com.ndgroups.xwin.Enum.PAYMENT_METHOD;
import com.ndgroups.xwin.Enum.PAYMENT_ORDER_STATUS;
import com.ndgroups.xwin.model.PaymentOrder;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.repository.PaymentOrderRepository;
import com.ndgroups.xwin.response.PaymentResponse;
import com.ndgroups.xwin.service.Interfcae.IPaymentOrderService;
import com.razorpay.Payment;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentOrderService implements IPaymentOrderService {
    @Autowired
    private PaymentOrderRepository paymentOrderRepository;
    @Value("${stripe.secretKey}")
    private String stripeSecretKey;
    @Value("${razorpay.api.key}")
    private String apiKey;
    @Value("${razorpay.api.secret}")
    private String apiSecretKey;

    @Override
    public PaymentOrder createOrder(User user, Long amount, PAYMENT_METHOD paymentMethod) {
        PaymentOrder paymentOrder = new PaymentOrder();
        paymentOrder.setUser(user);
        paymentOrder.setAmount(amount);
        paymentOrder.setPaymentMethod(paymentMethod);

        return paymentOrderRepository.save(paymentOrder);
    }

    @Override
    public PaymentOrder getPaymentOrderById(Integer id) throws Exception {
        return paymentOrderRepository.findById(id)
                .orElseThrow(() -> new Exception("payment with Id not found"));
    }

    @Override
    public Boolean proceedPaymentOrder(PaymentOrder paymentOrder, String paymentId) throws RazorpayException {
        if(paymentOrder.getStatus().equals(PAYMENT_ORDER_STATUS.PENDING)){
            if (paymentOrder.getPaymentMethod().equals(PAYMENT_METHOD.RAZORPAY)){
                RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecretKey);
                Payment payment = razorpay.payments.fetch(paymentId);

                Integer amount = payment.get("amount");
                String status = payment.get("status");

                if (status.equals("captured")){
                    paymentOrder.setStatus(PAYMENT_ORDER_STATUS.SUCCESS);
                    return  true;
                }
                paymentOrder.setStatus(PAYMENT_ORDER_STATUS.FAILED);
                paymentOrderRepository.save(paymentOrder);
                return false;
            }
            paymentOrder.setStatus(PAYMENT_ORDER_STATUS.SUCCESS);
            paymentOrderRepository.save(paymentOrder);
            return true;
        }
        return false;
    }

    @Override
    public PaymentResponse createRazorPaymentLink(User user, Long amount) {
        return null;
    }

    @Override
    public PaymentResponse createStripePaymentLink(User user, Long amount, Integer orderId) {
        return null;
    }
}
