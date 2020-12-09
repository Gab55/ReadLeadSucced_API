import { TestBed } from '@angular/core/testing';

import { EditeurWebServiceService } from './editeur-web-service.service';

describe('EditeurWebServiceService', () => {
  let service: EditeurWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditeurWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
