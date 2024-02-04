package com.example.fresh.repository;

import com.example.fresh.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITicketRepository extends JpaRepository<Ticket,Integer> {

}
