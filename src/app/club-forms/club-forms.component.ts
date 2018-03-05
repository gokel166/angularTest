import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Club } from '../club';

@Component({
  selector: 'app-club-forms',
  templateUrl: './club-forms.component.html',
  styleUrls: ['./club-forms.component.css']
})
export class ClubFormsComponent implements OnInit {
  clubArr: Club[];
  @Output() newClub: EventEmitter<Club> = new EventEmitter<Club>();

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.localStorageService.getClubs().subscribe(clubArr => {
      this.clubArr = clubArr;
    });
  }

  addClubPost(id, name) {
    if (!id || !name) {
      alert('Please add club');
    } else {
      this.localStorageService.addClub({id, name} as Club).subscribe(club => { this.newClub.emit(club); });
    }
  }

  onNewClub(clubs: Club) {
    this.clubArr.unshift(clubs);
  }

}
