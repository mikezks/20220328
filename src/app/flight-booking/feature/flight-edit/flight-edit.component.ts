import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateCity, validateCityWithParams } from '../../../shared/validation/city-validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup = this.getInitialFormMetadata();

  constructor(private fb: FormBuilder) { }

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
  }

  setValue(): void {
    this.editForm.patchValue({
      from: 'Wien',
      to: 'Berlin'
    });
  }
}
