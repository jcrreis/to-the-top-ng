import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iState } from './store/mystore.reducer';
import { Observable, from } from 'rxjs';
import { User } from './user';
import { getUser } from './store/selectors';
import { first } from 'rxjs/operators';
import { UserResponse, GameArrayResponse } from 'src/utils/interfaces';
import { addUserToStore, updateUpvotedGameList, updateCreatedGameList } from './store/mystore.actions';
import axios from '../utils/axios';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  private baseUrl = 'http://localhost:8000/'

  constructor(private store : Store<iState>){
  }

  ngOnInit() {
    from(axios.get(this.baseUrl + 'user/')).pipe(first(),)
        .subscribe((response:UserResponse)=>{
          const dataU = response.data
          const user: User = {
            id: dataU['pk'],
            name: dataU['username'],
            email: dataU['email'],
            image: dataU['image']
          }
          this.store.dispatch(addUserToStore({user: user}))
          from(axios.get(this.baseUrl + 'upvotes/users/' + user.id +'/games')).pipe(first(),)
          .subscribe((upvotedGames:GameArrayResponse) => {
            this.store.dispatch(updateUpvotedGameList({upvotedGameList: upvotedGames.data}))
          })
          from(axios.get(this.baseUrl +'games/user/'+user.id)).pipe(first(),)
          .subscribe((createdGames:GameArrayResponse) => {
            this.store.dispatch(updateCreatedGameList({createdGameList: createdGames.data}))
          })
      }, error => {
        
      })
  }
  

    title = 'to-the-top-ng';
}
