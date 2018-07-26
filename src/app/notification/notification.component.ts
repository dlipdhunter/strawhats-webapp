import { Component, OnInit } from '@angular/core';
import { CustomNotification, CustomNotificationType } from '../models/custom-notification';
import { CustomNotificationService } from '../services/custom-notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private customNotificationService: CustomNotificationService) { }

  notification: CustomNotification;
  notificationType = CustomNotificationType;

  ngOnInit() {
    this.customNotificationService.notification.subscribe(notification => {
      this.notification = notification;
    });
  }

  dismiss() {
    this.customNotificationService.reset();
  }

}
