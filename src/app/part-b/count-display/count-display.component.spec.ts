import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountDisplayComponent } from './count-display.component';

describe('CountDisplayComponent', () => {
  let component: CountDisplayComponent;
  let fixture: ComponentFixture<CountDisplayComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDisplayComponent ]
    })    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Counter display', () => {
    it('should display counter value', () => {
      const displayElement: HTMLElement = nativeElement.querySelector('.counter');
      component.counter = 2;

      fixture.detectChanges();

      expect(displayElement.innerText).toEqual('2');
    });
  });
});
