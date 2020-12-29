package com.example.demo.sym.service;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class Teacher {
    private String teaNum, name, email, password, subject, profileImage;
}


/*
  create table teachers(
  tea_num int primary key ,
  name varchar2(20),
  password varchar2(50),
  subject varchar2(20),
  profile_image varchar2(100)  
  )
 */
