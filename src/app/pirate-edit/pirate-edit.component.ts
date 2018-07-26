import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pirate } from '../models/pirate';
import { CustomNotificationService } from '../services/custom-notification.service';
import { CustomNotificationType } from '../models/custom-notification';

@Component({
  selector: 'app-pirate-edit',
  templateUrl: './pirate-edit.component.html',
  styleUrls: ['./pirate-edit.component.scss']
})
export class PirateEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute, private customNotificationService: CustomNotificationService) { }

  pirateEditForm: FormGroup;
  model: Pirate;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];

      this.dataService.getPirate(id).subscribe(pirate => {
        this.model = pirate;
        this.initializeForm();
      });
    });
  }

  initializeForm() {
    this.pirateEditForm = this.formBuilder.group({
      name: [this.model.name, Validators.required],
      nickName: [this.model.nickName, Validators.required],
      crewName: [this.model.crewName, Validators.required],
      position: [this.model.position, Validators.required],
      bounty: [this.model.bounty, Validators.required]
    });
  }

  update() {
    const vPirate: Pirate = this.pirateEditForm.value as Pirate;
    vPirate.id = this.model.id;

    this.dataService.updatePirate(vPirate).subscribe(
      success => {
        this.customNotificationService.show({
          message: 'Successfully updated.',
          type: CustomNotificationType.success,
          dismissible: false
        });
        this.router.navigate(['']);
      },
      err  => {
        this.customNotificationService.show({
          message: err.statusText,
          type: CustomNotificationType.danger,
          dismissible: false
        });
      });
  }

}
