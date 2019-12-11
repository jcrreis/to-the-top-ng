import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import axios from '../utils/axios'

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
    axios.post(this.signupUrl, data).then(response => {
      return response.data
    }).catch(error =>{
      return error
    })
     
  }
}
