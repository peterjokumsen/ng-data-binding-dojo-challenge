import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountAdjustComponent } from '../count-adjust/count-adjust.component';
import { CountDisplayComponent } from '../count-display/count-display.component';
import { CountControllerComponent } from './count-controller.component';

describe('CountControllerComponent', () => {
  let component: CountControllerComponent;
  let fixture: ComponentFixture<CountControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountControllerComponent, CountAdjustComponent, CountDisplayComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
