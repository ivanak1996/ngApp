import { TestBed } from '@angular/core/testing';

import { FairPacksService } from './fair-packs.service';

describe('FairPacksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FairPacksService = TestBed.get(FairPacksService);
    expect(service).toBeTruthy();
  });
});
