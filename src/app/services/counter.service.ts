import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterDict: { key: string, counter: number }[] = []

  constructor() { }


}
