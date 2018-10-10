import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { GifSearchService } from './gif-search.service';

describe('GifSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [GifSearchService]
    });
  });

  it('should be created', inject([GifSearchService], (service: GifSearchService) => {
    expect(service).toBeTruthy();
  }));
});
