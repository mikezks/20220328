import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightEditComponent } from './feature/flight-edit/flight-edit.component';
import { FlightSearchComponent } from './feature/flight-search/flight-search.component';
import { FlightTypeaheadComponent } from './feature/flight-typeahead/flight-typeahead.component';

const routes: Routes = [
  {
    path: 'flight-booking',
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'flight-typeahead',
        component: FlightTypeaheadComponent
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightBookingRoutingModule { }
