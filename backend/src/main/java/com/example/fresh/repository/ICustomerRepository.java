package com.example.fresh.repository;

import com.example.fresh.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    Customer getByEmailAndPassword(String username, String password);

    Customer getByEmail(String email);
}
