package com.ndgroups.xwin.controller;


import com.ndgroups.xwin.Repository.LoanRequestRepository;
import com.ndgroups.xwin.application.model.LoanRequest;
import com.ndgroups.xwin.model.LoanApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/loan")
public class LoanController {
    private final LoanRequestRepository loanRequestRepository;

    @Autowired
    public LoanController(LoanRequestRepository loanRequestRepository) {
        this.loanRequestRepository = loanRequestRepository;
    }

    @PostMapping("/request")
    public void requestLoan(@RequestBody LoanRequest loanApplication) {
        System.out.println(loanApplication);
    }

}
