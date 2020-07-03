import { TestBed } from '@angular/core/testing';

import {StockpricesServiceService } from './stockprices-service.service';

describe('StockpricesServiceService', () => {
  let service: StockpricesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockpricesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
