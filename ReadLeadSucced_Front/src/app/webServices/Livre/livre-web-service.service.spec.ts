import { TestBed } from '@angular/core/testing';

import { LivreWebServiceService } from './livre-web-service.service';

describe('LivreWebServiceService', () => {
  let service: LivreWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
