import { TestBed, inject } from '@angular/core/testing';

import { PirateCrewService } from './pirate-crew.service';

describe('PirateCrewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PirateCrewService]
    });
  });

  it('should be created', inject([PirateCrewService], (service: PirateCrewService) => {
    expect(service).toBeTruthy();
  }));
});
