import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ClubsService {

  constructor(
    private http: HttpClient
  ) { }

  clubber = [
    'Blue', 'Red', 'Green', 'Orange'
  ];

  myData() {
    return 'This are my current clubs';
  }

}
