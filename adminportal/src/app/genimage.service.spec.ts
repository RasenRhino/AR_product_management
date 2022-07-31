import { TestBed } from '@angular/core/testing';

import { GenimageService } from './genimage.service';

describe('GenimageService', () => {
  let service: GenimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
