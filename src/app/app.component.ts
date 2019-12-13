import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iState } from './store/mystore.reducer';
import { Observable, from } from 'rxjs';
import { User } from './user';
import { getUser } from './store/selectors';
import { first } from 'rxjs/operators';
import { UserResponse } from 'src/utils/interfaces';
import { addUserToStore } from './store/mystore.actions';
import axios from '../utils/axios';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  private userUrl = 'http://localhost:8000/user/'

  constructor(private store : Store<iState>){
  }

  ngOnInit() {
    from(axios.get(this.userUrl)).pipe(first(),)
        .subscribe((response:UserResponse)=>{
          const dataU = response.data
          const user: User = {
            id: dataU['pk'],
            name: dataU['username'],
            email: dataU['email']
          }
          this.store.dispatch(addUserToStore({user: user}))
      }, error => {
        
      })
  }
  

    title = 'to-the-top-ng';
}
