package com.example.fresh.service.impl;

import com.example.fresh.model.Customer;
import com.example.fresh.repository.ICustomerRepository;
import com.example.fresh.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository customerRepository;

    public List<Customer> allCustomers() {
        return customerRepository.findAll();
    }

    public Customer customerGetById(int id) {
        return customerRepository.findById(id).get();
    }

    @Override
    public void postCustomer(Customer c) {
        customerRepository.save(c);
    }

    @Override
    public void updateCustomer(Customer c) {
        customerRepository.save(c);
    }

    @Override
    public void deleteCustomer(int id) {
        customerRepository.deleteById(id);
    }

    @Override
    public Customer getByEmailAndPassword(String username, String password) {
        return customerRepository.getByEmailAndPassword(username, password);
    }

    @Override
    public Customer getCustomerByEmail(String email) {
        return customerRepository.getByEmail(email);
    }
}
