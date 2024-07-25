import { TestBed } from '@angular/core/testing';

import { MontyService } from './monty.service';

describe('MontyService', () => {
  let service: MontyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MontyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
