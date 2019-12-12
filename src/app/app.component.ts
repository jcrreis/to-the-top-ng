import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iState } from './store/mystore.reducer';
import { Observable } from 'rxjs';
import { User } from './user';
import { getUser } from './store/selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(){
  }

    title = 'to-the-top-ng';
}
