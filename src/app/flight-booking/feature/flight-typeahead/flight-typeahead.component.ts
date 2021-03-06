import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, EMPTY, filter, Observable, share, Subscription, switchMap, tap, timer } from 'rxjs';
import { Flight } from '../../../entities/flight';

@Component({
  selector: 'app-flight-typeahead',
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.css']
})
export class FlightTypeaheadComponent implements OnInit, OnDestroy {
  timer$: Observable<number> = timer(0, 2_000).pipe(
    tap(value => console.log('observable producer', value)),
    share()
  );
  subscription = new Subscription();

  control = new FormControl();
  flights$: Observable<Flight[]> = this.getFlightsStream$();
  loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.rxjsDemo();
  }

  getFlightsStream$(): Observable<Flight[]> {
    /**
     * Stream 1: Input value changes
     * - Trigger
     * - Data Provider
     */
    return this.control.valueChanges.pipe(
      // Get additional state
      // withLatestFrom(),
      // Filtering START
      filter(city => city.length > 2),
      debounceTime(300),
      distinctUntilChanged(),
      // Filtering END
      // Side-Effect
      tap(() => this.loading = true),
      /**
       * Stream 2: Backend HTTP call -> Array of Flights
       * - Data Provider
       */
      switchMap(city => this.load(city)),
      // Transformation
      // map(),
      // Side-Effect
      tap(() => this.loading = false)
    );
  }

  /**
   * Stream 2: Backend HTTP call -> Array of Flights
   * - Data Provider
   */
  load(from: string): Observable<Flight[]>  {
    const url = "http://www.angular.at/api/flight";

    const params = new HttpParams()
                        .set('from', from);

    const headers = new HttpHeaders()
                        .set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, {params, headers});
  }

  rxjsDemo(): void {
    this.subscription.add(
      this.timer$.subscribe(console.log)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
