import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let nativeElement: HTMLElement;
  let counter: HTMLSpanElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    nativeElement = fixture.nativeElement;
    counter = nativeElement.querySelector('.counter');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Plus button', () => {
    it('should increase counter element text', () => {
      const plusButton: HTMLButtonElement = nativeElement.querySelector('.plusButton');

      plusButton.click();
      fixture.detectChanges();

      expect(counter.textContent).toEqual('1');
    });
  });

  describe('Minus button', () => {
    it('should decrease counter element text', () => {
      const minusButton: HTMLButtonElement = nativeElement.querySelector('.minusButton');

      minusButton.click();
      fixture.detectChanges();

      expect(counter.textContent).toEqual('-1');
    });
  });
});
