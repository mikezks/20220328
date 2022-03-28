import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../app.token';
import { Flight } from '../entities/flight';
import { FlightService } from './flight.service';

@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string) { }

  load(from: string, to: string): Observable<Flight[]>  {
    console.log('DefaultFlightService');

    const url = `${ this.baseUrl }/flight`;

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers });
  }
}
