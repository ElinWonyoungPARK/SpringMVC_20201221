package com.example.demo.sym.service;

import com.example.demo.sym.service.Manager;

import org.springframework.stereotype.Repository;

@Repository
public interface ManagerMapper {
	public int insert(Manager manager);
}
