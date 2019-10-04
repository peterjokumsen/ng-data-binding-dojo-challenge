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
    if (this.count !== 0)


    if (inc) {
      this.count++;
    } else {
      this.count--;
    }
  }

  ngOnInit() {
  }

}
