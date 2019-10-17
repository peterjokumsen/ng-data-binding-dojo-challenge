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

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }

}
