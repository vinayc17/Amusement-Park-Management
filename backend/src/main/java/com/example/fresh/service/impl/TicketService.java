package com.example.fresh.service.impl;

import com.example.fresh.model.Ticket;
import com.example.fresh.repository.ITicketRepository;
import com.example.fresh.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService implements ITicketService {
    @Autowired
    private ITicketRepository ticketRepository;

    public List<Ticket> allTickets(){
        return ticketRepository.findAll();
    }
    public Ticket ticketGetById(int id){
        return ticketRepository.findById(id).get();
    }

    @Override
    public void postTicket(Ticket t) {
        ticketRepository.save(t);
    }

    @Override
    public void updateTicket(Ticket t) {
        ticketRepository.save(t);
    }

    @Override
    public void deleteTicket(int id) {
        ticketRepository.deleteById(id);
    }

}
