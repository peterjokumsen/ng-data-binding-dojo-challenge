import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountAdjustComponent } from './count-adjust.component';

describe('CountAdjustComponent', () => {
  let component: CountAdjustComponent;
  let fixture: ComponentFixture<CountAdjustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountAdjustComponent ]
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
