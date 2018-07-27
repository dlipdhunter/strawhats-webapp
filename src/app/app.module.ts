import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PirateListComponent } from './pirate/pirate-list/pirate-list.component';
import { PirateCardComponent } from './pirate/pirate-card/pirate-card.component';
import { PirateAddComponent } from './pirate/pirate-add/pirate-add.component';
import { PirateEditComponent } from './pirate/pirate-edit/pirate-edit.component';
import { PirateDeleteComponent } from './pirate/pirate-delete/pirate-delete.component';
import { PirateService } from './services/pirate.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationComponent } from './notification/notification.component';
import { CustomNotificationService } from './services/custom-notification.service';
import { PirateCardAddComponent } from './pirate/pirate-card-add/pirate-card-add.component';
import { PirateCrewAddComponent } from './pirate-crew/pirate-crew-add/pirate-crew-add.component';
import { PirateCrewAddModalComponent } from './pirate-crew/pirate-crew-add-modal/pirate-crew-add-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PirateListComponent,
    PirateCardComponent,
    PirateAddComponent,
    PirateEditComponent,
    PirateDeleteComponent,
    NavbarComponent,
    NotificationComponent,
    PirateCardAddComponent,
    PirateCrewAddComponent,
    PirateCrewAddModalComponent
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
  providers: [PirateService, CustomNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
