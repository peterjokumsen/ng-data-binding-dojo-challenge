import { CounterService } from 'src/app/services/counter.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-adjust',
  templateUrl: './count-adjust.component.html',
  styles: []
})
export class CountAdjustComponent implements OnInit {
  key = 'keyC';

  constructor(protected counterSvc: CounterService) { }

  ngOnInit() {
    this.counterSvc.counterDict[this.key] = this.counterSvc.counterDict[this.key] || 0;
  }

}
