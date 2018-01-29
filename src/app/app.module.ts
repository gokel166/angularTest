import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

import { AppComponent } from './app.component';
import { ClubsComponent } from './clubs/clubs.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }