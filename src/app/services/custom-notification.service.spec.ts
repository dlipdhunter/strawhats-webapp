import { TestBed, inject } from '@angular/core/testing';

import { CustomNotificationService } from './custom-notification.service';

describe('CustomNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomNotificationService]
    });
  });

  it('should be created', inject([CustomNotificationService], (service: CustomNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
