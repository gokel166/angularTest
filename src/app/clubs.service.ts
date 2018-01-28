import { Injectable } from '@angular/core';

@Injectable()
export class ClubsService {

  constructor() { }

  clubber = [
    'Blue', 'Red', 'Green', 'Orange'
  ];

  myData() {
    return 'This are my current clubs';
  }

}
