import { Injectable } from '@angular/core';

import { from } from 'rxjs';

import axios from '../utils/axios'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private signupUrl = 'http://localhost:8000/register/'

  constructor() { }

  signup (username: string,password: string,email: string){
    
    const data = {
      username: username,
      password: password,
      email: email,
    }
   const observable= from(axios.post(this.signupUrl, data))
   return observable
     
  }
}
