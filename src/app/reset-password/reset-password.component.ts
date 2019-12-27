import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})


export class ResetPasswordComponent implements OnInit {

  email: String 

  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleEmailChange($event){
    $event.preventDefault()
    this.email = $event.target.value
  }
  submit(){
    this.router.navigate(['/resetpassword/MTQU/asdhashdas234-52hg'])
  }

}
