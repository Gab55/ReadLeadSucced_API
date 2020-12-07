import { TestBed } from '@angular/core/testing';

import { AuteurWebServiceService } from './auteur-web-service.service';

describe('AuteurWebServiceService', () => {
  let service: AuteurWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuteurWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
