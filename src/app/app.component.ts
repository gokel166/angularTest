import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Club } from './club';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clubsForm = new FormGroup({
    name: new FormControl()
  })
  //
  constructor(private fb: FormBuilder, http: Http) {
    this.createForm();
  }

  // Create function for getting list of items 
  

  createForm() {
    this.clubsForm = this.fb.group({
      name: ['', Validators.required]
    });
  }
}