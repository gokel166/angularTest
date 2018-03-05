import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Club } from '../club';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-club-forms',
  templateUrl: './club-forms.component.html',
  styleUrls: ['./club-forms.component.css']
})
export class ClubFormsComponent implements OnInit {
  myControlForm: FormControl;
  rForms: FormGroup;
  clubArr: Club[];
  @Output() newClub: EventEmitter<Club> = new EventEmitter<Club>();

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.localStorageService.getClubs().subscribe(clubArr => {
      this.clubArr = clubArr;
    });
  }

  onNewClub(clubs: Club) {
    this.clubArr.unshift(clubs);
  }

  onSubmit(id, name) {
    this.localStorageService.addClub({id, name} as Club).subscribe(club => {
      console.log(club);
      this.newClub.emit(club);
    });
  }

  deleteClub(id, name) {
    //
  }

}
