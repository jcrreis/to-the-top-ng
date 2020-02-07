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

  hide: boolean = false

  userImage: File  = null

  previewUrl: any

  games = {}

  shouldBeDisabled : boolean = false;

  usernameError: ErrorMessage = {
    active: false,
    message: ""
  }

  emailError: ErrorMessage = {
    active: false,
    message: ""
  }

  passwordError: ErrorMessage = {
    active: false,
    message: "Passwords don't match"
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
    this.shouldBeDisabled = true
    const fd =  new FormData()
    fd.append('username',this.username)
    fd.append('password',this.password)
    fd.append('email',this.email)
    if(this.userImage !== null)
      fd.append('image', this.userImage , this.userImage.name)
    if(this.password === this.password1){
      this.signupService.signup(fd).pipe(first(),)
      .subscribe((sucess)=> {
          this.router.navigate(['/login'])
      },
      (error) => {
        console.log(error.response.data)
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
        this.shouldBeDisabled = false;
      })
    }
    else{
      this.passwordError.active = true

      setTimeout(() => { 
        this.passwordError.active = false
      }, 4500);
      this.shouldBeDisabled = false;
    }
  }

  onFileSelected(event){
    this.userImage = <File>event.target.files[0]
    this.preview()
  }

  preview(){
    var mimeType = this.userImage.type;
    if(mimeType.match(/image\/*/) == null)
      return;
    var reader = new FileReader();
    reader.readAsDataURL(this.userImage);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }

}
