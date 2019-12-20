import { Component, OnInit, Input } from '@angular/core';
import { SignupService } from '../signup.service'
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


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
      .subscribe(()=> {
          this.router.navigate(['/login'])
      })
    }
    else{
      alert("Passwords should match")
    }

  }

}
