import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service'
import { Store } from '@ngrx/store'
import { iState, iGameInfo } from '../store/mystore.reducer'
import { User } from '../user'
import { getUser } from '../store/selectors'
import { Observable } from 'rxjs';



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


  constructor(private loginService : LoginService, private store : Store<iState>) { }


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
    console.log(this.user)
  }

}
