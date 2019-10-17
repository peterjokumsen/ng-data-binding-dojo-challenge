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
    }).compileComponents();
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
    let button: HTMLButtonElement;
    beforeEach(() => {
      button = nativeElement.querySelector('.plusButton');
    });

    it('should increase counter element text', () => {
      button.click();

      fixture.detectChanges();
      expect(counter.textContent).toEqual('1');
    });
  });

  describe('Minus button', () => {
    let button: HTMLButtonElement;
    beforeEach(() => {
      button = nativeElement.querySelector('.minusButton');
    });

    it('should decrease counter element text', () => {
      button.click();

      fixture.detectChanges();
      expect(counter.textContent).toEqual('-1');
    });
  });
});
