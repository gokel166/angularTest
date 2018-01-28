import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

import { AppComponent } from './app.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubsService } from './clubs.service';


@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LocalStorageService,
    ClubsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
