import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PirateService } from '../../services/pirate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pirate } from '../../models/pirate';
import { CustomNotificationService } from '../../services/custom-notification.service';
import { CustomNotificationType } from '../../models/custom-notification';
import { PirateCrewService } from '../../services/pirate-crew.service';
import { PirateCrew } from '../../models/pirate-crew';

@Component({
  selector: 'app-pirate-edit',
  templateUrl: './pirate-edit.component.html',
  styleUrls: ['./pirate-edit.component.scss']
})
export class PirateEditComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private pirateService: PirateService,
    private pirateCrewService: PirateCrewService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customNotificationService: CustomNotificationService) { }

  pirateEditForm: FormGroup;
  model: Pirate;
  pirateCrews: PirateCrew[];

  ngOnInit() {
    this.loadPirateCrews();
    this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];

      this.pirateService.get(id).subscribe(pirate => {
        this.model = pirate;
        this.initializeForm();
      });
    });
  }

  initializeForm() {
    this.pirateEditForm = this.formBuilder.group({
      pirateID: this.model.pirateID,
      name: [this.model.name, Validators.required],
      nickName: [this.model.nickName, Validators.required],
      pirateCrewID: [this.model.pirateCrewID, Validators.required],
      position: [this.model.position, Validators.required],
      bounty: [this.model.bounty, Validators.required]
    });
  }

  update() {
    const vPirate: Pirate = this.pirateEditForm.value as Pirate;    

    this.pirateService.update(vPirate).subscribe(
      success => {
        this.customNotificationService.show({
          message: 'Successfully updated.',
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

  private loadPirateCrews() {
    this.pirateCrewService.getAll().subscribe(
      pirateCrews => {
        this.pirateCrews = pirateCrews;
      }
    );
  }

}
