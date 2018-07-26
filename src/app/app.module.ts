import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PirateListComponent } from './pirate-list/pirate-list.component';
import { PirateCardComponent } from './pirate-card/pirate-card.component';
import { PirateAddComponent } from './pirate-add/pirate-add.component';
import { PirateEditComponent } from './pirate-edit/pirate-edit.component';
import { PirateDeleteComponent } from './pirate-delete/pirate-delete.component';
import { DataService } from './services/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationComponent } from './notification/notification.component';
import { CustomNotificationService } from './services/custom-notification.service';

@NgModule({
  declarations: [
    AppComponent,
    PirateListComponent,
    PirateCardComponent,
    PirateAddComponent,
    PirateEditComponent,
    PirateDeleteComponent,
    NavbarComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [DataService, CustomNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
