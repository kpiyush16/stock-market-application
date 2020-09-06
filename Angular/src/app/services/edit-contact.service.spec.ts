import { TestBed } from '@angular/core/testing';

import { EditContactService } from './edit-contact.service';

describe('EditContactService', () => {
  let service: EditContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
