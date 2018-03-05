import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Club } from './club';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable()
export class ClubsService {
  private _assetURL = 'http://localhost:4200/assets/colors.json';

  constructor(private http: HttpClient) { }
  // remaining function calls only contain http call functions
  getClubPosts(): Observable<Club[]> {
    return this.http.get<Club[]>(this._assetURL);
  }

  saveClubPost(clubArr: Club): Observable<Club> {
    return this.http.post<Club>(this._assetURL, clubArr, httpOptions);
  }
}
