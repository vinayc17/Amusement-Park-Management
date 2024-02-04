package com.example.fresh.service;

import com.example.fresh.model.Ticket;

import java.util.List;

public interface ITicketService {
    List<Ticket> allTickets();
    Ticket ticketGetById(int id);
    void postTicket(Ticket t);
    void updateTicket(Ticket t);
    void deleteTicket(int id);
}
