import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})


export class ResetPasswordComponent implements OnInit {

  email: string 

  subscription: Subscription
  message: string = null
  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit() {
  }

  handleEmailChange($event){
    $event.preventDefault()
    this.email = $event.target.value
  }
  submit(){
    this.subscription = this.loginService.resetPasswordRequest(this.email).subscribe((response:any) =>{
      this.message = response.data
      console.log(response.data)
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }


}
