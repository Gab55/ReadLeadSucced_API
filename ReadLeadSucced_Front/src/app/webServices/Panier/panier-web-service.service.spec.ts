import { TestBed } from '@angular/core/testing';

import { PanierWebServiceService } from './panier-web-service.service';

describe('PanierWebServiceService', () => {
  let service: PanierWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
