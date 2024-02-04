import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/Ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-myactivities',
  templateUrl: './myactivities.component.html',
})
export class MyactivitiesComponent implements OnInit {
  tickets: Ticket[] = [];
  constructor(private service: TicketService) {}

  ngOnInit(): void {
    this.getMyTicktes();
  }

  getMyTicktes() {
    this.service
      .getTicketsByCustomer(JSON.parse(localStorage.getItem('customer')!).id)
      .subscribe((data) => {
        this.tickets = data;
      });
  }
}
