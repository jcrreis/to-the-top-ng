import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ErrorMessage } from 'src/utils/interfaces';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements OnInit {

  currentpassword: string
  newpassword: string
  newpassword1: string

  newPasswordError: ErrorMessage = {
    active: false,
    message: "Passwords don't match.Try again please."
  }

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  changePassword(){
    if(this.newpassword === this.newpassword1){
      this.loginService.changePassword(this.currentpassword,this.newpassword,this.newpassword1).
      subscribe((response) => {

      },(error) =>{
        console.log(error.response.data)

      })     
    }
    else
      this.newPasswordError.active = true
  }

}
