import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment', () => {
    component.count = 5;
    component.adjustCount(true);
    expect(component.count).toEqual(6);
  });

  it('should decrement', () => {
    component.count = 5;
    component.adjustCount(false);
    expect(component.count).toEqual(4);
  });

  it('should not go into negative', () => {
    component.count = 0;
    component.adjustCount(false);
    expect(component.count).toEqual(0);
  });
});
