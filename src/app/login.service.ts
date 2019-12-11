import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from '../utils/axios'

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8000/login/'

  constructor() { }

  login (username: String,password: String){
    
    const data = {
      username: username,
      password: password,
    }
    axios.post(this.loginUrl, data).then((response) => {
      return response.data
    }).catch((error) => {
      console.log(error)
      return error
    })

  }

}
