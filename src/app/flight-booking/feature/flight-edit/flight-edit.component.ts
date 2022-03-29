import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight } from '../../../entities/flight';
import { validateCity, validateCityWithParams } from '../../../shared/validation/city-validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup = this.getInitialFormMetadata();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) {
  }

  ngOnInit(): void {
    this.editForm.valueChanges
      .subscribe(console.log);
  }

  getInitialFormMetadata(): FormGroup {
    return this.fb.group({
      id: [0],
      from: ['Graz', [
        Validators.required,
        Validators.minLength(3),
        validateCityWithParams([
          'Wien', 'London', 'Frankfurt'
        ])
      ]],
      to: ['Hamburg', [
        Validators.required,
        Validators.minLength(3),
        validateCity
      ]],
      date: [new Date().toISOString()]
    });
  }

  save(): void {
    console.log('form value', this.editForm.value);
    console.log('form valid', this.editForm.valid);
    console.log('form dirty', this.editForm.dirty);
    console.log('form touched', this.editForm.touched);

    /* const flight = this.editForm.value;
    flight.delayed = false;

    this.http.post<Flight>(
      'http://www.angular.at/api/flight',
      flight
    ).subscribe(console.log) */
  }

  setValue(): void {
    this.editForm.patchValue({
      from: 'Wien',
      to: 'Berlin'
    });
  }
}
