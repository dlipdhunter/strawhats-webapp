import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { PirateCrewAddComponent } from '../pirate-crew-add/pirate-crew-add.component';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-pirate-crew-add-modal',
  templateUrl: './pirate-crew-add-modal.component.html',
  styleUrls: ['./pirate-crew-add-modal.component.scss']
})
export class PirateCrewAddModalComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild(PirateCrewAddComponent)
  private pirateCrewAddComponent: PirateCrewAddComponent;

  @ViewChild('pirateCrewAddModal')
  private pirateCrewAddModal: ModalDirective;

  @Output()
  modalClosed = new EventEmitter();

  ngOnInit() {
  }

  ngAfterViewInit() {    
  }

  create() {
    this.pirateCrewAddComponent.create();
    this.close();
  }

  close() {
    this.pirateCrewAddModal.hide();

    setTimeout(() => {
      this.modalClosed.emit();
    }, 1000);

    
  }
}
