import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8000/login/'

  constructor(private http: HttpClient) { }

  login (username: String,password: String){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const data = {
      username: username,
      password: password,
    }
    return this.http.post(this.loginUrl, data, httpOptions)
      .pipe(
      );
  }

}
