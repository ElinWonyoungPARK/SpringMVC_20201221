package com.example.demo.sym.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.sym.service.Manager;

@Service
public class ManagerService{
    @Autowired ManagerMapper managerMapper;
    
    
    public int register(Manager manager) {
    	int a = managerMapper.insert(manager);
        return a;
    }
    
}
