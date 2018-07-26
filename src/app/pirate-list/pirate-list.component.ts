import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Pirate } from '../models/pirate';

@Component({
  selector: 'app-pirate-list',
  templateUrl: './pirate-list.component.html',
  styleUrls: ['./pirate-list.component.scss']
})
export class PirateListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  pirates: Pirate[];

  ngOnInit() {
    this.dataService.getPirates().subscribe(pirates => 
      {
        this.pirates = pirates;        
      }
    );
  }

}
