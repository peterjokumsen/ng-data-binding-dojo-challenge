import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {
  count = 0;
  constructor() { }

  adjustCount(inc: boolean) {
    if (inc) {
      this.count += 1;
    } else {
      this.count = Math.max(this.count - 1, 0);
    }
  }

  ngOnInit() {
  }
}
