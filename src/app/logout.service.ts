import { Injectable } from '@angular/core';
import axios from '../utils/axios'
import { Store } from '@ngrx/store'
import { iState } from './store/mystore.reducer'

import { removeUserFromStore } from './store/mystore.actions';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private logoutUrl = 'http://localhost:8000/logout/'

  constructor(private store : Store<iState>) { }

  logout (){
    axios.post(this.logoutUrl).then(() => {
       this.store.dispatch(removeUserFromStore())
    }).catch((error) => {
      console.log(error)
    })

  }

}
