import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ErrorMessage } from 'src/utils/interfaces';
import { Router } from '@angular/router';

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
    message: ""
  }

  oldPasswordError: ErrorMessage = {
    active: false,
    message: ""
  }

  constructor(private loginService : LoginService,private router: Router) { }

  ngOnInit() {
  }

  changePassword(){
    if(this.newpassword === this.newpassword1){
      this.loginService.changePassword(this.currentpassword,this.newpassword,this.newpassword1).
      subscribe(() => {
        this.router.navigate['/user']
      },(error) =>{
        debugger
        if(error.response.data['old_password'] !== undefined){
          this.oldPasswordError = {
            active: true,
            message: "Your current password is wrong."
          }
          console.log(this.oldPasswordError)
        }
      })
    }
    else {
      this.newPasswordError = {
        active: true,
        message: "New passwords fields didn't match"
      }
      console.log(this.newPasswordError)
    }
    }

}
