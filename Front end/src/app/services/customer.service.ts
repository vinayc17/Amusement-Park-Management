import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private URL = 'http://localhost:8080/customers';
  // private URL = 'api/customers';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private client: HttpClient) {}

  getUsers(): Observable<Customer[]> {
    return this.client.get<Customer[]>(this.URL, { headers: this.headers });
  }

  login(email: string, password: string): Observable<Customer> {
    return this.client.post<Customer>(
      this.URL + '/login',
      JSON.stringify({ email, password }),
      { headers: this.headers }
    );
  }

  getUser(id: number): Observable<Customer> {
    return this.client.get<Customer>(this.URL + '/' + id, {
      headers: this.headers,
    });
  }

  checkUserByEmail(email: string): Observable<HttpResponse<any>> {
    return this.client.get<boolean>(this.URL + '/email/' + email, {
      observe: 'response',
    });
  }

  addUser(user: Customer): Observable<HttpResponse<any>> {
    return this.client.post<any>(this.URL, JSON.stringify(user), {
      headers: this.headers,
      observe: 'response',
    });
  }

  updateUser(user: Customer): Observable<Customer> {
    return this.client.put<Customer>(this.URL, JSON.stringify(user), {
      headers: this.headers,
    });
  }

  deleteUser(id: number): Observable<Customer> {
    console.log(id);
    return this.client.delete<Customer>(this.URL + '/' + id, {
      headers: this.headers,
    });
  }
}
