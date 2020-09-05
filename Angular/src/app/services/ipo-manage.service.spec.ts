import { TestBed } from '@angular/core/testing';

import { IpoManageService } from './ipo-manage.service';

describe('IpoManageService', () => {
  let service: IpoManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpoManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
