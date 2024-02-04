package com.example.fresh.controller;

import com.example.fresh.model.Ticket;
import com.example.fresh.service.IActivityService;
import com.example.fresh.service.ITicketService;
import com.example.fresh.service.impl.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TicketController {
    @Autowired
    private ITicketService ticketService;

    @GetMapping("/tickets")
    private ResponseEntity<?> allTickets() {
        return new ResponseEntity<>(ticketService.allTickets(), HttpStatus.OK);
    }

    @GetMapping("/tickets/{id}")
    private ResponseEntity<?> ticketGetById(@PathVariable int id) {
        try {
            return new ResponseEntity<>(ticketService.ticketGetById(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/tickets")
    private ResponseEntity<?> postTicket(@RequestBody Ticket t) {
        try {
            ticketService.postTicket(t);
            return new ResponseEntity<>(t, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/tickets/{id}")
    private ResponseEntity<?> updateTicket(@PathVariable int id, @RequestBody Ticket t) {
        try {
            ticketService.updateTicket(t);
            return new ResponseEntity<>(ticketService.ticketGetById(t.getId()), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/tickets/{id}")
    private ResponseEntity<?> deleteTicket(@PathVariable int id) {
        try {
            ticketService.deleteTicket(id);
            return new ResponseEntity<>("deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
