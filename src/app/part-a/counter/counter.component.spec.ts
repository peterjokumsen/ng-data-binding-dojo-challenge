import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let counterElement: HTMLElement;
  let upButton: HTMLButtonElement;
  let downButton: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    counterElement = fixture.nativeElement.querySelector('.counter');
    upButton = fixture.nativeElement.querySelector('.btn-group .up');
    downButton = fixture.nativeElement.querySelector('.btn-group .down');
  });

  it('should create and display "0"', () => {
    expect(component).toBeTruthy();
    expect(counterElement.innerHTML).toEqual('0');
  });


  describe('clicking the + icon', () => {
    it('should increment', () => {
      component.count = 2;
      upButton.click();

      fixture.detectChanges();

      expect(counterElement.innerHTML).toEqual('3');
    });
  });

  it('should decrement', () => {
    component.count = 2;
    downButton.click();

    fixture.detectChanges();

    expect(counterElement.innerHTML).toEqual('1');
  });

  it('should not go into negative', () => {
    component.count = -1;
    downButton.click();

    fixture.detectChanges();

    expect(counterElement.innerHTML).toEqual('0');
  });

  it('should not go into negative', () => {
    component.count = 0;
    upButton.click();

    fixture.detectChanges();

    expect(counterElement.innerHTML).toEqual('1');
  });
});
