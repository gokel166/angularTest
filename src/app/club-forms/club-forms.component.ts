import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Club } from '../club';
import { ClubsService } from '../clubs.service';

@Component({
  selector: 'app-club-forms',
  templateUrl: './club-forms.component.html',
  styleUrls: ['./club-forms.component.css']
})
export class ClubFormsComponent implements OnInit {
  clubArr: Club[];
  @Output() newClub: EventEmitter<Club> = new EventEmitter<Club>();

  constructor(private localStorageService: LocalStorageService, private clubService: ClubsService) {
  }

  ngOnInit() {
    this.localStorageService.getClubs().subscribe(clubArr => {
      this.clubArr = clubArr;
    });
    this.localStorageService.getClubs().subscribe(clubsArr => {
      this.clubArr = clubsArr;
      console.log(clubsArr, 'Complete local array');
    });
  }

  onNewClub(clubs: Club) {
    this.clubArr.unshift(clubs);
  }

  onSubmit(id, name, clubs) {
    this.localStorageService.addClub({id, name} as Club).subscribe(club => {
      console.log(club.name, 'Ready');
      this.newClub.emit(club);

    });
  }

  deleteClub(club: Club) {
    if (confirm('Are you sure')) {
      this.clubService.removeExClub(club.id).subscribe(() => {
        this.clubArr.forEach((clubit, index) => {
          if (club.id === clubit.id) {
            this.clubArr.splice(index, 1);
          }
        });
      });
    }
  }

}
