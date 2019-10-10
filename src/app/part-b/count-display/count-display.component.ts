import { Observable, of, Subject } from 'rxjs';
import { map, mergeMap, startWith, tap } from 'rxjs/operators';

import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
  styles: []
})
export class CountDisplayComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _totalCount = 0;

  @Input() countSubject: Subject<boolean>;

  count$: Observable<number>;

  constructor() { }

  ngOnInit() {
    const incrementOrDecrement$ = this.countSubject.asObservable().pipe(
      tap((isUp) => isUp ? this._totalCount++ : this._totalCount--),
      map(() => this._totalCount),
    );

    this.count$ = of(this._totalCount).pipe(
      mergeMap(() => incrementOrDecrement$),
      startWith(0),
    );
  }

  updateVal(val: KeyboardEvent) {
    console.log(val);
    this._totalCount = +((val.target as HTMLInputElement).value) || 0;
  }
}
