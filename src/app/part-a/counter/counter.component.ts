import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  adjust(amount: -1 | 1) {
    this.counter += amount;
  }
}
