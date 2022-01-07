import { TestBed } from '@angular/core/testing';

import { ListStorageService } from './list-storage.service';

describe('ListStorageService', () => {
  let service: ListStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
