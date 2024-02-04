import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../model/Activity';
@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private URL = 'http://localhost:8080/activities';
  // private URL = 'api/activities';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private client: HttpClient) {}

  getAllActivities(): Observable<Activity[]> {
    return this.client.get<Activity[]>(this.URL, { headers: this.headers });
  }

  getActivityById(id: number): Observable<Activity> {
    return this.client.get<Activity>(this.URL + '/' + id, {
      headers: this.headers,
    });
  }

  addActivity(activity: any): Observable<any> {
    return this.client.post<any>(this.URL, activity);
  }

  updateActivity(activity: any,id:number): Observable<any> {
    return this.client.put<any>(this.URL + `/` + id, activity);
  }

  deleteActivity(id: number): Observable<Activity> {
    return this.client.delete<Activity>(this.URL + '/' + id, {
      headers: this.headers,
    });
  }

  getActivitiesByTicket(id: number): Observable<Activity[]> {
    return this.client.get<Activity[]>(this.URL + '/ticket/' + id, {
      headers: this.headers,
    });
  }

  getActivitiesByTicketAndDate(
    id: number,
    date: string
  ): Observable<Activity[]> {
    return this.client.get<Activity[]>(
      this.URL + '/ticket/' + id + '/date/' + date,
      { headers: this.headers }
    );
  }
}
