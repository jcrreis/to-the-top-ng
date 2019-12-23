import { Component, OnInit,Input } from '@angular/core';
import { GamesService } from '../games.service'
import { Game,GameMinusId } from '../game'
import { Observable, from, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { getGameList, getUpvotedGames, getUser, getCreatedGames } from '../store/selectors';
import { Router } from '@angular/router';
import { User } from '../user';
import { first } from 'rxjs/operators';
import {axios} from '../../utils/axios'
import * as Comparators from '../../utils/comparators'
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-gameslist',
  templateUrl: './gameslist.component.html',
  styleUrls: ['./gameslist.component.scss']
})
export class GameslistComponent implements OnInit {

  

  @Input()  gamesType: string

  searchText: string

  games: Array<Game>;
  userid: number
  orders: Array<String>
  order: String
  reverse: Boolean
  subscription: Subscription
  filterText: string
  constructor(private gamesService : GamesService, private store : Store<iState>,private router:Router,private orderPipe: OrderPipe) {   }


  ngOnInit() {
    if (this.gamesType === "Upvoted"){
      this.subscription = this.store.select(getUpvotedGames).subscribe(games => {
        this.games = games
      })
    }
    else if (this.gamesType === "Created"){
      this.subscription =  this.store.select(getCreatedGames).subscribe(games => {
        this.games = games
      })
    }
    else{
      this.subscription = this.store.select(getGameList).subscribe(games => {
        this.games = games
        console.log(this.games)
      })
    }
    this.reverse = false
    this.orders = ['name','upvotes']
    this.getGames()
  }

  

  routeToGamePage(id){
    this.router.navigate(['/games/'+id])
  }
  getGames() {
   this.gamesService.allGames()
  }


  orderComp(){
    switch(this.order){
      case "name":

        this.reverse = false
        break;
      case "upvotes":
        this.reverse = true
        break;
      default: 
        this.reverse = false
        break;   
    }
  }

  redirectToForm(){
    this.router.navigate(['/create'])
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
