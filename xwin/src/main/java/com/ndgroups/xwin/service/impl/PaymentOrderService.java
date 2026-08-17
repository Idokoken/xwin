package com.ndgroups.xwin.service.impl;

import com.ndgroups.xwin.Enum.PAYMENT_METHOD;
import com.ndgroups.xwin.Enum.PAYMENT_ORDER_STATUS;
import com.ndgroups.xwin.model.PaymentOrder;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.repository.PaymentOrderRepository;
import com.ndgroups.xwin.response.PaymentResponse;
import com.ndgroups.xwin.service.Interfcae.IPaymentOrderService;
import com.razorpay.Payment;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.json.JSONObject;
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
    public PaymentResponse createRazorPaymentLink(User user, Long amount) throws RazorpayException {
        Long Amount =  amount * 100;

        try {
//            Instantiate a Razorpay Client with your key Id and Secret
            RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecretKey);

//            Create a JSON Object with the Payment Link Request Parameters
            JSONObject paymentLinkRequest = new JSONObject();
            paymentLinkRequest.put("amount", amount);
            paymentLinkRequest.put("currency", "INR");

//            Create a JSON Object with the Customer Details
            JSONObject customer = new JSONObject();
            customer.put("name", user.getUsername());
            customer.put("email", user.getEmail());

            paymentLinkRequest.put("customer", customer);

//            Create a JSON Object the Notification Settings
            JSONObject notify = new JSONObject();
            notify.put("email", true);
            paymentLinkRequest.put("notify", notify);

//            Set the Reminder Settings
            paymentLinkRequest.put("reminder_enabled", true);

//            Set Callback URL and Method
            paymentLinkRequest.put("callback_url", "https://localhost:3000/wallet");
            paymentLinkRequest.put("callback_method", "get");

//            Create the Payment link using the paymentlink.create method
            PaymentLink payment  = razorpay.paymentLink.create(paymentLinkRequest);

            String paymentLinkId = payment.get("id");
            String paymentLinkUrl = payment.get("short_url");

            PaymentResponse response = new PaymentResponse();
            response.setPayment_url(paymentLinkUrl);

            return response;

        } catch (RazorpayException e) {
            System.out.println("Error creating payment link: " + e.getMessage());
            throw new RazorpayException(e.getMessage());
        }

    }

    @Override
    public PaymentResponse createStripePaymentLink(User user, Long amount, Integer orderId) throws StripeException {
        Stripe.apiKey = stripeSecretKey;

        SessionCreateParams params = new SessionCreateParams.Builder()
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("https://localhost:3000/wallet?/order_id=" + orderId)
                .setCancelUrl("https://localhost:3000/payment/cancel")
                .addLineItem(SessionCreateParams.LineItem.builder()
                        .setQuantity(1L)
                        .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("usd")
                                .setUnitAmount(amount * 100)
                                .setProductData(SessionCreateParams
                                        .LineItem
                                        .PriceData
                                        .ProductData
                                        .builder()
                                        .setName("Top Up Wallet")
                                        .build()
                                ).build()
                        ).build()
                ).build();

        Session session = Session.create(params);

        System.out.println("session ---- " + session);

        PaymentResponse res = new PaymentResponse();
        res.setPayment_url(session.getUrl());

        return res;
    }


}
