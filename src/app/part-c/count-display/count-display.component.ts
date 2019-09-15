import { Component, OnInit } from '@angular/core';

import { CounterService } from '../counter.service';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
  styles: []
})
export class CountDisplayComponent implements OnInit {

  constructor(
    public svc: CounterService,
  ) { }

  ngOnInit() {
  }

}
