import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/Ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-bookcab',
  templateUrl: './bookcab.component.html',
})
export class BookcabComponent implements OnInit {
  tickets: Ticket[] = [];
  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings() {
    const customerId: number = JSON.parse(localStorage.getItem('customer')!).id;
    this.ticketService.getAllTickets().subscribe((tickets) => {
      this.tickets = tickets.filter(
        (ticket) => ticket.customer.id === customerId
      );
    });
  }
}
