import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InMemClubService } from 'angular-in-memory-web-api';

@Injectable()
export class ClubsService {

  constructor(private http: HttpClient){}

  clubber = [
    'Blue', 'Red', 'Green', 'Orange'
  ];

  myData() {
    return 'This are my current clubs';
  }

}
