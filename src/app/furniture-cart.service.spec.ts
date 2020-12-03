import { TestBed } from '@angular/core/testing';

import { FurnitureCartService } from './furniture-cart.service';

describe('FurnitureCartService', () => {
  let service: FurnitureCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FurnitureCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
