import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-adjust',
  templateUrl: './count-adjust.component.html',
  styles: []
})
export class CountAdjustComponent implements OnInit {
  @Output()
  increase = new EventEmitter<any>();

  @Output()
  decrease = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick(direction: 'up' | 'down') {
    switch (direction) {
      case 'down':
        this.decrease.next(null);
        break;

      case 'up':
        this.increase.next(null);
        break;
    }
  }
}
