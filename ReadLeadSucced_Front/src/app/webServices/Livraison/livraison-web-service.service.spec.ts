import { TestBed } from '@angular/core/testing';

import { LivraisonWebServiceService } from './livraison-web-service.service';

describe('LivraisonWebServiceService', () => {
  let service: LivraisonWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivraisonWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
