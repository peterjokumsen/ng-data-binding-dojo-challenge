import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
  styles: []
})
export class CountDisplayComponent implements OnInit {
  @Input()
  countValue: number;

  constructor() { }

  ngOnInit() {
  }
}
