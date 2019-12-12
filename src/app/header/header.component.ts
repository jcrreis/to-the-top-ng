import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { getUser } from '../store/selectors';
import { User } from '../user';
import { Observable } from 'rxjs';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: Observable<User>;



  constructor(private router: Router, private logoutService: LogoutService, private store : Store<iState>) { }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  logoutUser(){
    this.logoutService.logout()
  }
  
  ngOnInit() {
    this.user = this.store.select(getUser)
  }

}
