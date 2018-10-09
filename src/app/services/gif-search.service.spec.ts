import { TestBed, inject } from '@angular/core/testing';

import { GifSearchService } from './gif-search.service';

describe('GifSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GifSearchService]
    });
  });

  it('should be created', inject([GifSearchService], (service: GifSearchService) => {
    expect(service).toBeTruthy();
  }));
});
