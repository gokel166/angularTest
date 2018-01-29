import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../clubs.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Club } from '../club';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
  providers: [ClubsService]
})
export class ClubsComponent implements OnInit {

  form;
  _clubArray: Club[];

  constructor(private clubsService: ClubsService) { }

  getClubsInfo(): void {
    this.clubsService.getClubdata().subscribe(
      resultArray => this._clubArray = resultArray,
      error => console.log("Error :: " + error)
    )
  }

  ngOnInit() {
    this.getClubsInfo();
    this.form = new FormGroup({
      name: new FormControl("Gray"),
      id: new FormControl("4")
    })
  }

}