import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs/Observable';
import { Club } from './club';
import 'rxjs/Rx';

@Injectable()
export class ClubsService {

  private _assetURL = "../assets/colors.json";

  constructor(private http: Http) { }

  getClubdata(): Observable<Club[]> {
    return this.http.get(this._assetURL)
    .map((response: Response) => {
      return <Club[]>response.json()
    })
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  
}