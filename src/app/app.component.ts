import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Club } from './club';

import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    //Make http request
    this.httpClient.get('/assets/colors').subscribe(data => {
      //this.results = data['results'];
    })
  }
}
