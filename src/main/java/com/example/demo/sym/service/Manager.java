package com.example.demo.sym.service;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class Manager {
    private String mgrNum, email, password;
}


/*
  create table managers(
  mgr_num int primary key ,
  email varchar2(20),
  password varchar2(20)  
  )
 */