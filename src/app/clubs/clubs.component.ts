import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../clubs.service';
import { Http } from '@angular/http'

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  constructor(private http: Http) { }
  
  searchClub() {
    this.http.get("");
  }

  ngOnInit() {
  }

}
