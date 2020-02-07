import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service'
import { Store } from '@ngrx/store'
import { iState, iGameInfo } from '../store/mystore.reducer'
import { User } from '../user'
import { getUser } from '../store/selectors'
import { Observable, Subscription, from } from 'rxjs';
import { Router } from '@angular/router';
import { UserResponse, GameArrayResponse, ErrorMessage } from 'src/utils/interfaces';
import { addUserToStore, updateUpvotedGameList } from '../store/mystore.actions';
import { first } from 'rxjs/operators';
import axios from '../../utils/axios';
import { Game } from '../game';
import { BACKEND_URL } from '../../utils/consts'

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

  hide: boolean = false

  shouldBeDisabled: boolean = false

  user: Observable<User>;
  private subscription: Subscription;
  private subscription2: Subscription;
  private userUrl = BACKEND_URL+'user/'

  loginError: ErrorMessage = {
    active: false,
    message: ""
  }

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
    this.shouldBeDisabled = true

    this.loginService.login(this.username, this.password)
    .pipe(first(),).subscribe((r) =>{
      from(axios.get(this.userUrl)).pipe(first(),)
        .subscribe((response:any)=>{
          console.log(response.d)
          const dataU = response.data
          const user: User = {
            id: dataU['pk'],
            name: dataU['username'],
            email: dataU['email'],
            image: dataU['image']
          }
          this.store.dispatch(addUserToStore({user: user}))
      from(axios.get(BACKEND_URL+"upvotes/users/"+user.id+"/games")).pipe(first(),)
        .subscribe((response:any)=>{  
          const upvotedGames: Array<Game> = response.data
          this.store.dispatch(updateUpvotedGameList({upvotedGameList: upvotedGames}))
          this.router.navigate(['/'])
        })
    }
    )},
    (error) => {
      console.log(error)
      this.shouldBeDisabled = false
      this.loginError = {
         active: true,
         message: error.response.data.non_field_errors[0],
     }
    })
  }
}
