import { Injectable } from '@angular/core';
import axios from '../utils/axios'
import { Store } from '@ngrx/store'
import { iState } from './store/mystore.reducer'
import { BACKEND_URL } from '../utils/consts'
import { removeUserFromStore, updateUpvotedGameList } from './store/mystore.actions';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private logoutUrl = BACKEND_URL+'logout/'

  constructor(private store : Store<iState>) { }

  logout (){
   
    
    axios.post(this.logoutUrl).then(() => {
       this.store.dispatch(removeUserFromStore())
       this.store.dispatch(updateUpvotedGameList({upvotedGameList: []}))
    }).catch((error) => {
    })

  }

}
