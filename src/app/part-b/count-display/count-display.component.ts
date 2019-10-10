import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
  styles: []
})
export class CountDisplayComponent implements OnInit {
  @Input() count = 0;

  constructor() { }

  ngOnInit() {
  }

  updateVal(val: KeyboardEvent) {
    console.log({ value: +(val.key) });
    this.count = +(val.key) || 0;
  }
}
