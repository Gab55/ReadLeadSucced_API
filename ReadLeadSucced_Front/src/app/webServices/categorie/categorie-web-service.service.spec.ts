import { TestBed } from '@angular/core/testing';

import { CategorieWebServiceService } from './categorie-web-service.service';

describe('CategorieWebServiceService', () => {
  let service: CategorieWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
