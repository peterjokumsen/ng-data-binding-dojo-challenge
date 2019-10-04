
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountAdjustComponent } from '../count-adjust/count-adjust.component';
import { CountDisplayComponent } from '../count-display/count-display.component';
import { CountControllerComponent } from './count-controller.component';

describe('CountControllerComponent', () => {
  let component: CountControllerComponent;
  let fixture: ComponentFixture<CountControllerComponent>;
  let upBtn: HTMLButtonElement;
  let downBtn: HTMLButtonElement;
  let display: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CountControllerComponent,
        CountAdjustComponent,
        CountDisplayComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountControllerComponent);

    component = fixture.componentInstance;

    upBtn = fixture.nativeElement.querySelector('.btn-group .up');
    downBtn = fixture.nativeElement.querySelector('.btn-group .down');
    display = fixture.nativeElement.querySelector('span.counter');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when clicking the + button', () => {
    it('should increment the display value', () => {
      upBtn.click();  // starts at 0 - todo set start value

      fixture.detectChanges();

      expect(display.innerHTML).toEqual('1');
    });
  });

  describe('when clicking the - button', () => {
    it('should decrement the display value', () => {
      downBtn.click();  // starts at 0 - todo set start value

      fixture.detectChanges();

      expect(display.innerHTML).toEqual('-1');
    });
  });
});
