import { TestBed } from '@angular/core/testing';

import { AsdesNgService } from './asdes-ng.service';

describe('AsdesNgService', () => {
  let service: AsdesNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsdesNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
