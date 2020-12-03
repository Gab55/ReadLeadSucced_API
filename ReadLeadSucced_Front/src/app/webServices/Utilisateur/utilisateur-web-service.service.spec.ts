import { TestBed } from '@angular/core/testing';

import { UtilisateurWebServiceService } from './utilisateur-web-service.service';

describe('UtilisateurWebServiceService', () => {
  let service: UtilisateurWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilisateurWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
