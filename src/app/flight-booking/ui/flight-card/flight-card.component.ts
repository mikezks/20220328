// src/app/flight-card/flight-card.component.ts

import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges, ElementRef, NgZone } from '@angular/core';
import { Flight } from '../../../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges {

  @Input() item: Flight | null = null;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor(private element: ElementRef, private zone: NgZone) {
    console.debug('ctor', this.item);
  }

  ngOnInit() {
    console.debug('ngOnInit', this.item);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.debug('ngOnChanges', this.item);

    if (changes?.['item']) {
    console.debug('ngOnChanges: item');
    }
    if (changes?.['selected']) {
    console.debug('ngOnChanges: selected');
    }
  }

  select() {
    this.selected = true;
    this.selectedChange.emit(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.emit(false);
  }

  blink() {
    // Dirty Hack used to visualize the change detector
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        // let originalColor = this.element.nativeElement.firstChild.style.backgroundColor;
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
        //              ^----- DOM-Element
      });

      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = this.selected ? 'rgb(204, 197, 185)' : 'white';
      }, 1000);
    });

    return null;
  }

}
