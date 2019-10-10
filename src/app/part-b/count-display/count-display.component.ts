import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
  styles: []
})
export class CountDisplayComponent implements OnInit {
  @Input() count = 0;

  constructor() { }

  ngOnInit() {
  }

  updateVal(val: any){
    console.log(val);
  }

}
