import { Component, OnInit, Input } from '@angular/core';
import { SignupService } from '../signup.service'


@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {

  @Input()
  username: string = ""

  @Input()
  password: string = ""

  @Input()
  email: string = ""

  games = {}

  constructor(private signupService : SignupService) { }

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

  handleEmailChange($event){
    $event.preventDefault()
    this.email = $event.target.value
  }

  signup($event): void {
    $event.preventDefault()
    this.signupService.signup(this.username,this.password,this.email)
  }

}
