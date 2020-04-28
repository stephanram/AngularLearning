import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { observable, of as observableof, EMPTY, pipe, throwError } from 'rxjs/index';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public validateUser(user: User) {
    return this.http.get('https://blog-cf.cfapps.io/findboauserbyname/' + user.userName);
  }
}
