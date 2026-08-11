package com.ndgroups.xwin.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    public String home(){
        return "welcome Xwin crypto and Investment platform trading home page";
    }

    @GetMapping("/home")
    public String secureHome(){
        return "welcome Xwin crypto and Investment platform trading  secure home page";
    }


}
