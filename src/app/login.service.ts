import { Injectable } from '@angular/core';
import axios from '../utils/axios'
import { Store } from '@ngrx/store'
import { iState } from './store/mystore.reducer'
import {  from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8000/login/'
  private userUrl = 'http://localhost:8000/user/'
  constructor(private store : Store<iState>) { }

  login (username: String,password: String){
    
    const data = {
      username: username,
      password: password,
    }

    const observable = from(axios.post(this.loginUrl, data))
    return observable;
  
  }

}
