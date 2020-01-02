import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { getUser } from '../store/selectors';
import { User } from '../user';
import { Observable, Subscription } from 'rxjs';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  subscriptionUser: Subscription
  userLoggedIn: User = undefined


  constructor(private router: Router, private logoutService: LogoutService, private store : Store<iState>) { }

  ngOnInit() {
    this.subscriptionUser = this.store.select(getUser).subscribe(user => {
      this.userLoggedIn = user
    })
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  logoutUser(){
    this.logoutService.logout()
    this.router.navigate(['/'])
  }
  isUserLoggedIn(): boolean{

    return this.userLoggedIn !== null
  }
  
  ngOnDestroy() {
    this.subscriptionUser.unsubscribe()
  }

}
