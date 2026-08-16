package com.ndgroups.xwin.service.Interfcae;

import com.ndgroups.xwin.Enum.PAYMENT_METHOD;
import com.ndgroups.xwin.model.PaymentOrder;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.response.PaymentResponse;
import com.razorpay.RazorpayException;

public interface IPaymentOrderService {
    PaymentOrder createOrder(User user, Long amount, PAYMENT_METHOD paymentMethod);
    PaymentOrder getPaymentOrderById(Integer id) throws Exception;
    Boolean proceedPaymentOrder(PaymentOrder paymentOrder, String paymentId) throws RazorpayException;
    PaymentResponse createRazorPaymentLink(User user, Long amount);
    PaymentResponse createStripePaymentLink(User user, Long amount, Integer orderId);
}
