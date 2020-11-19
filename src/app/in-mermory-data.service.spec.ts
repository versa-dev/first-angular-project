import { TestBed } from '@angular/core/testing';

import { InMermoryDataService } from './in-mermory-data.service';

describe('InMermoryDataService', () => {
  let service: InMermoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMermoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
