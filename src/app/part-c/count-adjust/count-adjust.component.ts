import { Component, OnInit } from '@angular/core';

import { CounterService } from '../counter.service';

@Component({
  selector: 'app-count-adjust',
  templateUrl: './count-adjust.component.html',
  styles: []
})
export class CountAdjustComponent implements OnInit {

  constructor(
    public svc: CounterService,
  ) { }

  ngOnInit() {
  }
}
