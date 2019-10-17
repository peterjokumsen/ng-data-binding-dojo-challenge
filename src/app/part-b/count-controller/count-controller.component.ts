import { Component, ViewChild } from '@angular/core';
import { CountAdjustComponent } from '../count-adjust/count-adjust.component';
import { CountDisplayComponent } from '../count-display/count-display.component';

@Component({
  selector: 'app-count-controller',
  templateUrl: './count-controller.component.html',
})
export class CountControllerComponent {
  @ViewChild('adjust', {static: true}) adjustComponent: CountAdjustComponent;
  @ViewChild('display', {static: true}) displayComponent: CountDisplayComponent;
}
