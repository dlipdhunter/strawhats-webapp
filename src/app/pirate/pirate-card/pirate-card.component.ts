import { Component, OnInit, Input } from '@angular/core';
import { Pirate } from '../../models/pirate';

@Component({
  selector: 'app-pirate-card',
  templateUrl: './pirate-card.component.html',
  styleUrls: ['./pirate-card.component.scss']
})
export class PirateCardComponent implements OnInit {

  constructor() { }

  @Input() model: Pirate;

  ngOnInit() {
  }

}
