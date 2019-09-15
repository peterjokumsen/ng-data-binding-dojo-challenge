import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-controller',
  templateUrl: './count-controller.component.html',
  styles: []
})
export class CountControllerComponent implements OnInit {
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  up() {
    this.count++;
  }

  down() {
    this.count--;
  }
}
