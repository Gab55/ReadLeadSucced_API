import { TestBed } from '@angular/core/testing';

import { PanierWebService } from './panier.service';

describe('PanierWebService', () => {
  let service: PanierWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
