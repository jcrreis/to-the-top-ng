import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-reset-password-confirmation',
  templateUrl: './reset-password-confirmation.component.html',
  styleUrls: ['./reset-password-confirmation.component.scss']
})
export class ResetPasswordConfirmationComponent implements OnInit {

  @Input()
  password: string = ""
  
  @Input()
  password1: string = ""

  hide:boolean
  subscription: Subscription;
  user: string;
  token: string;
  error: string = null;

  constructor(private route:ActivatedRoute,private loginService:LoginService,private router:Router) { }

  ngOnInit() {
    this.hide = true;
    this.subscription = this.route.queryParams
      .subscribe(params => {
        this.user = params.user
        this.token = params.token
      })
  }

  switchhide(){
    this.hide = !this.hide
  }

  handlePasswordChange($event){
    $event.preventDefault()
    this.password = $event.target.value
  }

  handlePasswordConfirmationChange($event){
    $event.preventDefault()
    this.password1 = $event.target.value
  }

  submitNewPassword(){
    this.loginService.resetPassword(this.user,this.token,this.password,this.password1).pipe(first(),).subscribe(() => {
      this.router.navigate(['/login'])
    },(error) =>{
      this.error = error.response.data.new_password2[0]
    })
  }

}
