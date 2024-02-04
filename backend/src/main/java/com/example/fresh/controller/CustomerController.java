package com.example.fresh.controller;

import com.example.fresh.model.Customer;
import com.example.fresh.service.ICustomerService;
import com.example.fresh.service.impl.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;

    @GetMapping("/customers")
    private ResponseEntity<?> allCustomers() {
        return new ResponseEntity<>(customerService.allCustomers(), HttpStatus.OK);
    }

    @PostMapping("/customers/login")
    private ResponseEntity<?> login(@RequestBody HashMap<String, String> body) {
        try {
            String email = body.get("email");
            String password = body.get("password");
            Customer c = customerService.getByEmailAndPassword(email, password);
            if (c != null) {
                return ResponseEntity.ok().body(c);
            } else {
                return ResponseEntity.ok().body(new HashMap<>().put("msg", "Please check the credentials"));
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new HashMap<>().put("error", e.getMessage()));
        }
    }

    @GetMapping("/customers/{id}")
    private ResponseEntity<?> customerGetById(@PathVariable int id) {
        try {
            return new ResponseEntity<>(customerService.customerGetById(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/customers")
    private ResponseEntity<?> postCustomer(@RequestBody Customer c) {
        try {
            customerService.postCustomer(c);
            return new ResponseEntity<>(c, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new HashMap<>().put("error", e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/customers/email/{email}")
    private ResponseEntity<?> getCustomerByEmail(@PathVariable String email) {
        try {
            Customer c = customerService.getCustomerByEmail(email);
            if (c != null) {
                return ResponseEntity.ok().body(c);
            } else {
                return ResponseEntity.noContent().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new HashMap<>().put("error", e.getMessage()));
        }
    }

    @PutMapping("/customers/{id}")
    private ResponseEntity<?> updateCustomer(@PathVariable int id, @RequestBody Customer c) {
        try {
            customerService.updateCustomer(c);
            return new ResponseEntity<>(customerService.customerGetById(c.getId()), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/customers/{id}")
    private ResponseEntity<?> deleteCustomer(@PathVariable int id) {
    	HashMap<String,String> res = new HashMap<>();
        try {
            customerService.deleteCustomer(id);
            System.out.println(id);
            res.put("msg", "customer deleted successfully");
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
        	res.put("msg", e.getMessage());
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
