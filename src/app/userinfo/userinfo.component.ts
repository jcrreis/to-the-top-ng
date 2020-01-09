import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { Subscription } from 'rxjs';
import { getUser } from '../store/selectors';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  constructor(private router: Router, private store : Store<iState>, private loginService : LoginService ) { }

  subscription: Subscription
  user: User
  img: any

  ngOnInit() {
    this.subscription = this.store.select(getUser).subscribe(user => {
      this.user = user
      this.loginService.userImage(this.user.id).subscribe((response) => {
        console.log(response.data)
        this.img = response.data['image']
      })
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
