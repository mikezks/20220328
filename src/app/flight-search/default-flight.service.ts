import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { FlightService } from './flight.service';

@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(private http: HttpClient) { }

  load(from: string, to: string): Observable<Flight[]>  {
    console.log('DefaultFlightService');

    const url = 'http://www.angular.at/api/flight';

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers });
  }
}
