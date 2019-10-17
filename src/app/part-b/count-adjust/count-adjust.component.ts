import { Component } from '@angular/core';

@Component({
  selector: 'app-count-adjust',
  templateUrl: './count-adjust.component.html',
})
export class CountAdjustComponent {
  counter = 0;

  adjust(amount: -1 | 1): void {
    this.counter += amount;
  }
}
