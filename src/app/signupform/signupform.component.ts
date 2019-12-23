import { Component, OnInit, Input } from '@angular/core';
import { SignupService } from '../signup.service'
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorMessage } from 'src/utils/interfaces';


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
  
  @Input()
  password1: string = ""

  games = {}

  usernameError: ErrorMessage = {
    active: false,
    message: ""
  }

  emailError: ErrorMessage = {
    active: false,
    message: ""
  }
  

  constructor(private signupService : SignupService,private router:Router) { }

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

  handlePasswordConfirmationChange($event){
    $event.preventDefault()
    this.password1 = $event.target.value
  }

  signup($event): void {
    $event.preventDefault()
    if(this.password === this.password1){
      this.signupService.signup(this.username,this.password,this.email).pipe(first(),)
      .subscribe((sucess)=> {
          this.router.navigate(['/login'])
      },
      (error) => {
        console.log(error)
        const data = error.response.data
        if(data.email !== undefined){
          console.log(data.email)
          this.emailError = {
            active: true,
            message:'A ' + data.email
          }
        }

        if(data.username !== undefined){
          this.usernameError = {
            active: true,
            message: data.username
          }
        }
        setTimeout(() => { 
          this.emailError.active = false
          this.usernameError.active = false
        }, 4500);

      })
    }
    else{
      alert("Passwords should match")
    }

  }

}
