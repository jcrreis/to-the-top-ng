import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements OnInit {

  currentpassword: string
  newpassword: string
  newpassword1: string

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  changePassword(){
    if(this.newpassword === this.newpassword1)
      this.loginService.changePassword(this.currentpassword,this.newpassword,this.newpassword1);
    else
      alert("Passwords doesn't match.Try again please.")
  }

}
