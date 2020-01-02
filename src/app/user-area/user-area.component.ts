import { Component, OnInit } from '@angular/core';
import { getUser } from '../store/selectors';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent implements OnInit {

  constructor(private loginService : LoginService,private router: Router) { }

  ngOnInit() {
    this.loginService.getUser().subscribe( (response:any) => {
      
    },() => {
      this.router.navigate(['/login'])
    })
  }


}
