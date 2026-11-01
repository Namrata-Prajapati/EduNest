package com.ftaci.futuretech.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to FutureTech API!";
    }

    @GetMapping("/health")
    public String health() {
        return "FutureTech Backend is Running!";
    }
}