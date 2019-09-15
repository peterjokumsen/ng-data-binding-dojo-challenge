import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  count = 0;

  constructor() { }

  up() {
    this.count++;
  }

  down() {
    this.count--;
  }
}
