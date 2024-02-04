import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private URL = 'http://localhost:8080/customers';
  // private URL = 'api/customers';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private client: HttpClient) {}

  getCustomerByActivity(id: number): Observable<Customer[]> {
    return this.client.get<Customer[]>(this.URL + '/activity/' + id);
  }

  getCustomerByTicket(id: number): Observable<Customer[]> {
    return this.client.get<Customer[]>(this.URL + '/ticket/' + id);
  }

  getCustomerByActivityAndTicket(
    activityId: number,
    ticketId: number
  ): Observable<Customer[]> {
    return this.client.get<Customer[]>(
      this.URL + '/activity/' + activityId + '/ticket/' + ticketId
    );
  }

  getCustomerByActivityAndTicketAndDate(
    activityId: number,
    ticketId: number,
    date: string
  ): Observable<Customer[]> {
    return this.client.get<Customer[]>(
      this.URL +
        '/activity/' +
        activityId +
        '/ticket/' +
        ticketId +
        '/date/' +
        date
    );
  }

  getCustomerByActivityAndDate(
    activityId: number,
    date: string
  ): Observable<Customer[]> {
    return this.client.get<Customer[]>(
      this.URL + '/activity/' + activityId + '/date/' + date
    );
  }

  getCustomerByTicketAndDate(
    ticketId: number,
    date: string
  ): Observable<Customer[]> {
    return this.client.get<Customer[]>(
      this.URL + '/ticket/' + ticketId + '/date/' + date
    );
  }

  getCustomerByDate(date: string): Observable<Customer[]> {
    return this.client.get<Customer[]>(this.URL + '/date/' + date);
  }
}
