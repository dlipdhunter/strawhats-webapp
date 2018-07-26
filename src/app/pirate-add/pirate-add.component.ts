import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Pirate } from '../models/pirate';
import { Router } from '@angular/router';
import { CustomNotificationService } from '../services/custom-notification.service';
import { CustomNotificationType } from '../models/custom-notification';

@Component({
  selector: 'app-pirate-add',
  templateUrl: './pirate-add.component.html',
  styleUrls: ['./pirate-add.component.scss']
})
export class PirateAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router, private customNotificationService: CustomNotificationService) { }

  pirateAddForm: FormGroup;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.pirateAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      nickName: ['', Validators.required],
      crewName: ['', Validators.required],
      position: ['', Validators.required],
      bounty: ['', Validators.required]
    });
  }

  create() {
    const pirate: Pirate = this.pirateAddForm.value as Pirate;

    this.dataService.createPirate(pirate).subscribe(
      success => {
        this.customNotificationService.show({
          message: 'Successfully added a pirate.',
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
