import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private signupUrl = 'http://localhost:8000/register/'

  constructor(private http: HttpClient) { }

  signup (username: string,password: string,email: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const data = {
      username: username,
      password: password,
      email: email,
    }
    return this.http.post(this.signupUrl, data, httpOptions)
      .pipe(
      );
  }
}
