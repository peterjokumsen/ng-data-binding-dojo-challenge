import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  up() {
    this.count++;
  }

  down() {
    this.count--;
  }
}
