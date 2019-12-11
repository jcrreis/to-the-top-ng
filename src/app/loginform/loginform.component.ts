import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service'


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


  constructor(private loginService : LoginService) { }

  ngOnInit() {
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
  }

}
