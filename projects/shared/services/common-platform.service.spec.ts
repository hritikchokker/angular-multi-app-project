import { TestBed } from '@angular/core/testing';

import { CommonPlatformService } from './common-platform.service';

describe('CommonPlatformService', () => {
  let service: CommonPlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonPlatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
