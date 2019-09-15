import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterService } from '../counter.service';
import { CountAdjustComponent } from './count-adjust.component';

describe('CountAdjustComponent', () => {
  let component: CountAdjustComponent;
  let fixture: ComponentFixture<CountAdjustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountAdjustComponent ],
      providers: [ CounterService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
