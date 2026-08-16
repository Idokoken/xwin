package com.ndgroups.xwin.service.Interfcae;

import com.ndgroups.xwin.model.PaymentDetails;
import com.ndgroups.xwin.model.User;

public interface IPaymentDetailsService {
    public PaymentDetails addPaymentDetails(String accountNumber, String accountHolderName, String ifsc,
                                            String bankName, User user);
    public PaymentDetails getUsersPaymentDetails(User user);
}
