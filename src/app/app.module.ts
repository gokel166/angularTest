import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClubsService } from './clubs.service';
import { LocalStorageService } from './local-storage.service';
import { ClubsComponent } from './clubs/clubs.component';
import { Club } from './club';
import { ClubFormsComponent } from './club-forms/club-forms.component';

const appRoutes: Routes = [
  {
    path: 'clubs',
    component: ClubsComponent
  },
  {
    path: '',
    component: AppComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent,
    ClubFormsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [ClubsService, HttpClient, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
