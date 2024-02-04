import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../model/Ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private URL = 'http://localhost:8080/tickets';
  // private URL = 'api/tickets';

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private client: HttpClient) {}

  getAllTickets(): Observable<Ticket[]> {
    return this.client.get<Ticket[]>(this.URL, { headers: this.headers });
  }

  getTicket(id: number): Observable<Ticket> {
    return this.client.get<Ticket>(this.URL + '/' + id, {
      headers: this.headers,
    });
  }

  addTicket(ticket: Ticket): Observable<Ticket> {
    return this.client.post<Ticket>(this.URL, ticket);
  }

  updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.client.put<Ticket>(
      this.URL + '/' + ticket.id,
      JSON.stringify(ticket),
      {
        headers: this.headers,
      }
    );
  }

  deleteTicket(id: number): Observable<Ticket> {
    return this.client.delete<Ticket>(this.URL + '/' + id, {
      headers: this.headers,
    });
  }

  getTicketsByCustomer(id: number): Observable<Ticket[]> {
    return this.client.get<Ticket[]>(this.URL + '/customer/' + id, {
      headers: this.headers,
    });
  }
}
