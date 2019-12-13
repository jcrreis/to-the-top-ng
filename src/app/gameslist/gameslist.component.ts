import { Component, OnInit,Input } from '@angular/core';
import { GamesService } from '../games.service'
import { Game,GameMinusId } from '../game'
import { Observable, from } from 'rxjs';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { getGameList, getUpvotedGames, getUser, getCreatedGames } from '../store/selectors';
import { Router } from '@angular/router';
import { User } from '../user';
import { first } from 'rxjs/operators';
import {axios} from '../../utils/axios'

@Component({
  selector: 'app-gameslist',
  templateUrl: './gameslist.component.html',
  styleUrls: ['./gameslist.component.scss']
})
export class GameslistComponent implements OnInit {

  @Input() 
  game: GameMinusId 

  @Input()  gamesType: string

  games: Observable<Array<Game>>;
  userid: number
  constructor(private gamesService : GamesService, private store : Store<iState>,private router:Router) {   }


  ngOnInit() {
    if (this.gamesType = "Upvoted"){
      this.games = this.store.select(getUpvotedGames)
    }
    else if (this.gamesType = "Created"){
      this.games = this.store.select(getCreatedGames)
    }
    else{
      this.games = this.store.select(getGameList)
    }
    debugger
    this.getGames()
    this.game = {
      name: "",
      price: null,
      description: "",
      storeLink: "",
      trailerUrl: "",
      upvotes: 0,
    }
  }

  routeToGamePage(id){
    this.router.navigate(['/games/'+id])
  }
  getGames() {
   this.gamesService.allGames()
  }

  addGame(): void{
    this.gamesService.addGame(this.game)
    console.log(this.game)
  }

}
