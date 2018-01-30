import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../clubs.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Club } from '../club';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
  providers: [ClubsService]
})
export class ClubsComponent implements OnInit {
  
  _clubArray: Club[];

  

  constructor(private clubsService: ClubsService) { }

  
  getPosts(): void {
    this.clubsService.getClubData().subscribe(
      resultArray => this._clubArray = resultArray,
      error => console.log("Error :: " + error)
    )
  }
  

  
  ngOnInit() {
    this.getPosts();
  }

  

}