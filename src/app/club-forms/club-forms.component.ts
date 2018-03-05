import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Club } from '../club';

@Component({
  selector: 'app-club-forms',
  templateUrl: './club-forms.component.html',
  styleUrls: ['./club-forms.component.css']
})
export class ClubFormsComponent implements OnInit {
  club: Club;
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.club = new Club({
      id: null,
      name: ''
    });
  }

}
