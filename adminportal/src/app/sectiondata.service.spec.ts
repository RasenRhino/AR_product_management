import { TestBed } from '@angular/core/testing';

import { SectiondataService } from './sectiondata.service';

describe('SectiondataService', () => {
  let service: SectiondataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectiondataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
