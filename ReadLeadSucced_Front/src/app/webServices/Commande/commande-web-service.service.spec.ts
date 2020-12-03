import { TestBed } from '@angular/core/testing';

import { CommandeWebServiceService } from './commande-web-service.service';

describe('CommandeWebServiceService', () => {
  let service: CommandeWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
