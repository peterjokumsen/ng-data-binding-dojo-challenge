import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountAdjustComponent } from './count-adjust.component';

describe('CountAdjustComponent', () => {
  let component: CountAdjustComponent;
  let fixture: ComponentFixture<CountAdjustComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountAdjustComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Plus button', () => {
    let button: HTMLButtonElement;
    beforeEach(() => {
      button = nativeElement.querySelector('.btn.plus');
    });

    it('should increase counter element text', () => {
      button.click();

      fixture.detectChanges();
      expect(component.counter).toEqual(1);
    });
  });

  describe('Minus button', () => {
    let button: HTMLButtonElement;
    beforeEach(() => {
      button = nativeElement.querySelector('.btn.minus');
    });

    it('should decrease counter element text', () => {
      button.click();

      fixture.detectChanges();
      expect(component.counter).toEqual(-1);
    });
  });
});
