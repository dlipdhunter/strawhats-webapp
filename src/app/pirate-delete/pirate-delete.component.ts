import { Component, OnInit } from '@angular/core';
import { Pirate } from '../models/pirate';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomNotificationService } from '../services/custom-notification.service';
import { CustomNotificationType } from '../models/custom-notification';

@Component({
  selector: 'app-pirate-delete',
  templateUrl: './pirate-delete.component.html',
  styleUrls: ['./pirate-delete.component.scss']
})
export class PirateDeleteComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute, private customNotificationService: CustomNotificationService) { }

  model: Pirate;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];
      this.dataService.getPirate(id).subscribe(pirate => {
        this.model = pirate;
      });
    });
  }

  deletePirate() {
    this.dataService.deletePirate(this.model.id).subscribe(
      success => {
        this.customNotificationService.show({
          message: 'Successfully deleted.',
          type: CustomNotificationType.success,
          dismissible: false
        });
        this.router.navigate(['']);
      },
      err => {
        this.customNotificationService.show({
          message: err.statusText,
          type: CustomNotificationType.danger,
          dismissible: false
        });
      });
  }
}
