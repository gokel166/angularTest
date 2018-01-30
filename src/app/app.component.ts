import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Club } from './club';
import { ClubsComponent } from './clubs/clubs.component';
import { LocalStorageService } from './local-storage.service';
import { ClubsService } from './clubs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clubsForm = new FormGroup({
    name: new FormControl()
  })
  
  constructor(private fb: FormBuilder, http: Http) {
    this.createForm();
  }



  createForm() {
    this.clubsForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  
}