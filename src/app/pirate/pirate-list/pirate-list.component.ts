import { Component, OnInit } from '@angular/core';
import { PirateService } from '../../services/pirate.service';
import { Pirate } from '../../models/pirate';

@Component({
  selector: 'app-pirate-list',
  templateUrl: './pirate-list.component.html',
  styleUrls: ['./pirate-list.component.scss']
})
export class PirateListComponent implements OnInit {

  constructor(private pirateService: PirateService) { }

  pirates: Pirate[];

  ngOnInit() {
    this.pirateService.getAll().subscribe(pirates => 
      {
        this.pirates = pirates;        
      }
    );
  }

}
