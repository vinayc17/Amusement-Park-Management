package com.example.fresh.service;

import com.example.fresh.model.Customer;

import java.util.List;

public interface ICustomerService {

    List<Customer> allCustomers();

    Customer customerGetById(int id);

    void postCustomer(Customer c);

    void updateCustomer(Customer c);

    void deleteCustomer(int id);

    Customer getByEmailAndPassword(String email, String password);

    Customer getCustomerByEmail(String email);
}
