import { async, TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(async(() => TestBed.configureTestingModule({
    providers: [
      CounterService,
    ]
  })));

  beforeEach(() => {
    service = TestBed.get(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialise with 0', () => {
    expect(service.count).toEqual(0);
  });

  describe('up()', () => {
    it('should increment count', () => {
      service.up();

      expect(service.count).toEqual(1);
    });
  });

  describe('down()', () => {
    it('should decrement count', () => {
      service.down();

      expect(service.count).toEqual(-1);
    });
  });
});
