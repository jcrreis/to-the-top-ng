import { Component, OnInit } from '@angular/core';
import { getUser } from '../store/selectors';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent implements OnInit {
  user: any;

  constructor() { }

  ngOnInit() {
  }

}
