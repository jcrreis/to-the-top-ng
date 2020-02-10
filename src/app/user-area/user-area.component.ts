import { Component, OnInit } from '@angular/core';
import { getUser } from '../store/selectors';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { addUserToStore } from '../store/mystore.actions';
import { User } from '../user';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent implements OnInit {

  constructor(private loginService : LoginService,private router: Router,private store : Store<iState>) { }

  ngOnInit() {
    debugger
    this.loginService.getUser().subscribe( (response:any) => {
      const user: User = {
        id: response.data['pk'],
        email: response.data['email'],
        name: response.data['username'],
        image: null,
      }
      this.store.dispatch(addUserToStore({user: user}))
    },() => {
      this.router.navigate(['/login'])
    })
  }


}
