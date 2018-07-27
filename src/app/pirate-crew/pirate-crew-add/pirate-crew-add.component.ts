import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PirateCrewService } from '../../services/pirate-crew.service';
import { PirateCrew } from '../../models/pirate-crew';

@Component({
  selector: 'app-pirate-crew-add',
  templateUrl: './pirate-crew-add.component.html',
  styleUrls: ['./pirate-crew-add.component.scss']
})
export class PirateCrewAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private pirateCrewService: PirateCrewService) { }

  @Input('insideModal')
  isInsideModal: boolean;
  @Output()
  success = new EventEmitter<boolean>();

  pirateCrewAddForm: FormGroup;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.pirateCrewAddForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  create() {
    const pirateCrew = this.pirateCrewAddForm.value as PirateCrew;
    this.pirateCrewService.create(pirateCrew).subscribe(
      success => {
        this.success.emit(true);
      },
      err => {

      });
  }

}
