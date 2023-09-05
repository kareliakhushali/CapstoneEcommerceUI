import { TestBed } from '@angular/core/testing';

import { CapstoneserviceService } from './capstoneservice.service';

describe('CapstoneserviceService', () => {
  let service: CapstoneserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapstoneserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
