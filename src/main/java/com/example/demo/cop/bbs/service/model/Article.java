package com.example.demo.cop.bbs.service.model;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter @Component
public class Article {
    protected int artId;
    protected String writerId, title, content, writtenDate, updatedDate;
}

/*
  create table articles(
  art_num int primary key ,
  title varchar2(20),
  content varchar2(20),
  count varchar2(20),
  writer_num int
  )
 */
