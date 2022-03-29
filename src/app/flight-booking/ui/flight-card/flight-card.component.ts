import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flight, initialFlight } from '../../../entities/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent {
  @Input() item: Flight = this.getInitialFlight();
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  getInitialFlight(): Flight {
    return {
      id: 0,
      from: '',
      to: '',
      date: '',
      delayed: false
    };
  }
}
