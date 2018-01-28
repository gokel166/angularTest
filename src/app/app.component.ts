import { Component } from '@angular/core';

import { Club } from './club';

import { LocalStorageService } from './local-storage.service';
import { ClubsService } from './clubs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private clubService: ClubsService) {}

  ngOnInit() {
    this.clubService.clubber;
    console.log(this.clubService.clubber)
  }
}
