import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../models/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.loadRoutes();

    this.router.events.subscribe(res => {
      this.menuItems.forEach(a => {
        if(a.route == this.router.url) {
          a.active = true;
        }
        else {
          a.active = false;
        }
      }) 
    });
  }

  loadRoutes() {
    this.menuItems.push({route: '/', name: 'Pirates', active: false});
    this.menuItems.push({route: '/add', name: 'Add', active: false});
  }
}