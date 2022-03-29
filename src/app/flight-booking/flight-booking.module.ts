import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './feature/flight-search/flight-search.component';
import { FlightCardComponent } from './ui/flight-card/flight-card.component';
import { FlightEditComponent } from './feature/flight-edit/flight-edit.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';


@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent
  ],
  imports: [
    CommonModule,
    FlightBookingRoutingModule,
    SharedModule
  ]
})
export class FlightBookingModule { }
