import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';

import axios from '../utils/axios'
import { BACKEND_URL } from '../utils/consts'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private signupUrl = BACKEND_URL+'register/'

  constructor() { }

  signup (fd: FormData): Observable<any>{
    
   const observable= from(axios.post(this.signupUrl, fd))
   console.log()
   return observable
     
  }
}
