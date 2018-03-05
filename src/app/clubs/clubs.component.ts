import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../clubs.service';
import { Club } from '../club';
import 'rxjs/add/operator/map';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
  providers: [ClubsService]
})
export class ClubsComponent implements OnInit {
  clubArray: Club[];
  constructor(private clService: ClubsService) {
  }

  ngOnInit() {
    this.clService.getClubPosts().subscribe(clubArray => {
      console.log(clubArray);
      this.clubArray = clubArray;
    });
  }


}
