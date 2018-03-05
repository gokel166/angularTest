import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Club } from './club';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ClubsService {
  clubArray: Club[];
  private _assetURL = 'http://localhost:4200/assets/colors.json';

  constructor(private http: HttpClient) { }
  // remaining function calls only contain http call functions
  getClubPosts(): Observable<Club[]> {
    return this.http.get<Club[]>(this._assetURL);
  }
}
