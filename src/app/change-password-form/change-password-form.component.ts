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

  isCurrentPassInvalid: boolean = false
  isNewPassInvalid: boolean = false
  isNewPass1Invalid: boolean = false


  constructor(private loginService : LoginService,private router: Router) { }

  ngOnInit() {
  }

  isCurrentPasswordInvalid() :boolean{
    return this.currentpassword === undefined
  }
  isNewPasswordInvalid() :boolean{
    return this.newpassword === undefined
  }
  isNewPassword1Invalid() :boolean{
    return this.newpassword1 === undefined
  }

  isFormInvalid() :boolean{
    return this.isCurrentPassInvalid || this.isNewPassInvalid
            || this.isNewPass1Invalid
  }

  changePassword(){
    debugger
    this.isCurrentPassInvalid = this.isCurrentPasswordInvalid()
    this.isNewPassInvalid = this.isNewPasswordInvalid()
    this.isNewPass1Invalid = this.isNewPassword1Invalid()

    if(!this.isFormInvalid()){
      if(this.newpassword !== this.newpassword1){
        this.newPasswordError = {
          active: true,
          message: "New passwords fields didn't match"
        }
      }
      else{
      this.loginService.changePassword(this.currentpassword,this.newpassword,this.newpassword1).
      subscribe(() => {
        this.router.navigate['/user']
      },(error) =>{
        if(error.response.data['old_password'] !== undefined){
          this.oldPasswordError = {
            active: true,
            message: "Your current password is wrong."
          }
        }
      })
      }
    }
    }

}
