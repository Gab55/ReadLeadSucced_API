import { TestBed } from '@angular/core/testing';

import { LibraireWebServiceService } from './libraire-web-service.service';

describe('LibraireWebServiceService', () => {
  let service: LibraireWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraireWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
