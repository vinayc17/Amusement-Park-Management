import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/Ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
})
export class BookingsComponent implements OnInit {
  tickets: Ticket[] = [];
  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings() {
    this.ticketService.getAllTickets().subscribe((data) => {
      this.tickets = data;
    });
  }

  handleTicket(ticket: Ticket, status: string) {
    ticket.status = status;
    this.ticketService.updateTicket(ticket).subscribe((data) => {
      if (data.id) {
        this.getBookings();
      }
    });
  }
}
