import { TestBed, inject } from '@angular/core/testing';

import { SocialMediaApiService } from './social-media-api.service';

describe('SocialMediaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialMediaApiService]
    });
  });

  it('should ...', inject([SocialMediaApiService], (service: SocialMediaApiService) => {
    expect(service).toBeTruthy();
  }));
});
