import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-adjust',
  templateUrl: './count-adjust.component.html',
  styles: []
})
export class CountAdjustComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit() {
  }

}
