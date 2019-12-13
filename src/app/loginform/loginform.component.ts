import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service'
import { Store } from '@ngrx/store'
import { iState, iGameInfo } from '../store/mystore.reducer'
import { User } from '../user'
import { getUser } from '../store/selectors'
import { Observable, Subscription, from } from 'rxjs';
import { Router } from '@angular/router';
import { UserResponse } from 'src/utils/interfaces';
import { addUserToStore } from '../store/mystore.actions';
import { first } from 'rxjs/operators';
import axios from '../../utils/axios';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})


export class LoginformComponent implements OnInit {

  @Input()
  username: string = ""

  @Input()
  password: string = ""

  user: Observable<User>;
  private subscription: Subscription;
  private subscription2: Subscription;
  private userUrl = 'http://localhost:8000/user/'

  constructor(private loginService : LoginService, private store : Store<iState>,private router:Router) { }


  ngOnInit() {
    
    this.user = this.store.select(getUser)
  }

  handleUsernameChange($event){
    $event.preventDefault()
    this.username = $event.target.value
  }

  handlePasswordChange($event){
    $event.preventDefault()
    this.password = $event.target.value
  }


  login($event): void {
    $event.preventDefault()
    this.loginService.login(this.username, this.password)
    .pipe(first(),).subscribe((response) =>{
       //TODO: Add error validation to login
       from(axios.get(this.userUrl)).pipe(first(),)
        .subscribe((response:UserResponse)=>{
          const dataU = response.data
          const user: User = {
            id: dataU['pk'],
            name: dataU['username'],
            email: dataU['email']
          }
          this.store.dispatch(addUserToStore({user: user}))
          this.router.navigate(['/'])
      })
    })
  }

}
