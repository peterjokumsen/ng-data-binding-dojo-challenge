import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('plus button should increase counter element text', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const plusButton: HTMLButtonElement = bannerElement.querySelector('.plusButton');
    const counter: HTMLSpanElement = bannerElement.querySelector('.counter');

    plusButton.click();
    fixture.detectChanges();

    expect(counter.textContent).toEqual('1');
  });
});
