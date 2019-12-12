import { Injectable } from '@angular/core';
import axios from '../utils/axios'
import { Store } from '@ngrx/store'
import { iState } from './store/mystore.reducer'
import { User } from './user'

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { addUserToStore } from './store/mystore.actions';


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
    axios.post(this.loginUrl, data).then((response) => {
     axios.get(this.userUrl).then(response => {
       const dataU = response.data
       const user: User = {
         id: dataU['pk'],
         name: dataU['username'],
         email: dataU['email']
       }
       this.store.dispatch(addUserToStore({user: user}))
     })
    }).catch((error) => {
      console.log(error)
    })

  }

}
