import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../entities/flight';
import { FlightService } from './flight.service';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService implements FlightService {

  load(from: string, to: string): Observable<Flight[]> {
    return of([
      {
        id: 999,
        from: 'Barcelona',
        to: 'Madrid',
        date: 'heute',
        delayed: false
      }
    ]);
  }
}
