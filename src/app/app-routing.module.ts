import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PirateListComponent } from './pirate-list/pirate-list.component';
import { PirateAddComponent } from './pirate-add/pirate-add.component';
import { PirateEditComponent } from './pirate-edit/pirate-edit.component';
import { PirateDeleteComponent } from './pirate-delete/pirate-delete.component';

const routes: Routes = [
  {
    path: '', children: [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
