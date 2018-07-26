import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomNotification, CustomNotificationType } from '../models/custom-notification';

@Injectable({
  providedIn: 'root'
})
export class CustomNotificationService {

  constructor() { }

  private notificationSource = new BehaviorSubject<CustomNotification>(null);
  notification = this.notificationSource.asObservable();

  show(notification: CustomNotification) {

    this.notificationSource.next(notification);

    if(!notification.dismissible) {
      setTimeout(() => {
        this.reset();
      }, 1000);
    }    
  }

  reset() {
    this.notificationSource.next(null);
  }
}
