import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.hide = true;
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

  }

}
