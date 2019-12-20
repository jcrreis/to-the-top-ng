import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { Subscription } from 'rxjs';
import { getUser } from '../store/selectors';
import { User } from '../user';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  constructor(private router: Router, private store : Store<iState> ) { }

  subscription: Subscription
  user: User

  ngOnInit() {
    this.subscription = this.store.select(getUser).subscribe(user => {
      this.user = user
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
