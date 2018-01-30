import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs/Observable';
import { Club } from './club';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ClubsService {

  private _assetURL = "http://localhost:4200/assets/colors.json";
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  constructor(private http: Http) { }

  getClubData(): Observable<Club[]> {
    return this.http.get(this._assetURL).map((response: Response) => {
      return <Club[]>response.json();
    })
    .catch(this.handleError);
  }
  
}