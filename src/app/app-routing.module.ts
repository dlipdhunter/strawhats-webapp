import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PirateListComponent } from './pirate/pirate-list/pirate-list.component';
import { PirateAddComponent } from './pirate/pirate-add/pirate-add.component';
import { PirateEditComponent } from './pirate/pirate-edit/pirate-edit.component';
import { PirateDeleteComponent } from './pirate/pirate-delete/pirate-delete.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', redirectTo: 'pirates', pathMatch: 'full'
      },
      {        
        path: 'pirates', children: [
          {
            path: '', component: PirateListComponent
          },
          {
            path: 'add', component: PirateAddComponent
          },
          {
            path: 'edit/:id', component: PirateEditComponent
          },
          {
            path: 'delete/:id', component: PirateDeleteComponent
          }
        ]
      },
      {
        path: 'piratecrews', children: []
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
