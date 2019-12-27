import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';

import axios from '../utils/axios'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private signupUrl = 'http://localhost:8000/register/'

  constructor() { }

  signup (fd: FormData): Observable<any>{
    
   const observable= from(axios.post(this.signupUrl, fd))
   console.log()
   return observable
     
  }
}
