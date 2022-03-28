import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { BASE_URL } from '../app.token';
import { Flight } from '../entities/flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
    { provide: BASE_URL, useValue: 'local component provider' }
  ]
})
export class FlightSearchComponent implements OnInit {
  from: string = 'Hamburg';
  to: string = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

  constructor(
    private flightService: FlightService,
    @Inject(BASE_URL) private baseUrl: string) {

    console.log(this.baseUrl);
  }

  ngOnInit(): void {
  }

  search(): void {
    this.flightService.load(this.from, this.to)
      .subscribe({
        next: flights => this.flights = flights,
        error: err => console.error('Flights loading error', err)
      });
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
