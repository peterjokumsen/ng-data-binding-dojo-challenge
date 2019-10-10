import { Subject } from 'rxjs';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-adjust',
  templateUrl: './count-adjust.component.html',
  styles: []
})
export class CountAdjustComponent {
  subject = new Subject<boolean>();
}
