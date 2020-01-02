import { Injectable } from '@angular/core';
import axios from '../utils/axios'
import { Store } from '@ngrx/store'
import { iState } from './store/mystore.reducer'
import {  from, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8000/login/'
  private userUrl = 'http://localhost:8000/user/'
  constructor(private store : Store<iState>) { }

  login (username: String,password: String):Observable<any>{
    
    const data = {
      username: username,
      password: password,
    }

    const observable = from(axios.post(this.loginUrl, data))
    return observable;
  
  }
  userImage(userid: number): Observable<any>{
    return from(axios.get("http://localhost:8000/users/"+userid))
  }

  changePassword( currentPassword: string, newPassword: string, newPassword1: string):Observable<any>{
    const userData = {
      old_password: currentPassword,
      new_password1: newPassword,
      new_password2: newPassword1,
    }
    const observable = from(axios.post('http://localhost:8000/password/change/', userData));

    return observable
  }
  //activate/<str:uidb64>/<str:token>/
  activateAccount(userid: string,token: string){

    return from(axios.post('http://localhost:8000/users/activate/'+userid+'/'+token+'/'));
  }

  getUser(){
    return from(axios.get(this.userUrl))
  }

  resetPasswordRequest(email: string){
    const data = {
      email: email,
    }
    return from(axios.post('http://localhost:8000/password/reset/',data))
  }

  resetPassword(id:string,token:string,password:string,password1:string){
    const data = {
      uid: id,
      token: token,
      new_password1: password,
      new_password2: password1,
    }
    return from(axios.post('http://localhost:8000/password/reset/confirm/',data))
  }

}
