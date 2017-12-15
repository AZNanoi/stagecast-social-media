import { TestBed, inject } from '@angular/core/testing';

import { HideUiCommunicationService } from './hide-ui-communication.service';

describe('HideUiCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HideUiCommunicationService]
    });
  });

  it('should ...', inject([HideUiCommunicationService], (service: HideUiCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
