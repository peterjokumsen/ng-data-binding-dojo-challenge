import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountAdjustComponent } from '../count-adjust/count-adjust.component';
import { CountDisplayComponent } from '../count-display/count-display.component';
import { CountControllerComponent } from './count-controller.component';

describe('CountControllerComponent', () => {
  let component: CountControllerComponent;
  let fixture: ComponentFixture<CountControllerComponent>;
  let controllerElement: HTMLElement;
  let displayCounterSpan: HTMLSpanElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountControllerComponent, CountAdjustComponent, CountDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    controllerElement = fixture.nativeElement;
    displayCounterSpan = controllerElement.querySelector('.counter');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('adjust component + button', () => {
    it('should increment display component counter element', () => {
      const button: HTMLButtonElement = controllerElement.querySelector('.btn.plus');

      button.click();
      fixture.detectChanges();

      expect(displayCounterSpan.textContent).toEqual('1');
    });
  });

  describe('CountAdjustComponent', () => {
    it('should change CountDisplayComponent counter', () => {
      component.adjustComponent.counter = 2;

      fixture.detectChanges();

      expect(component.displayComponent.counter).toEqual(2);
    });
  });
});
