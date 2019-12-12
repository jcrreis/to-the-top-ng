import { Component, OnInit,Input } from '@angular/core';
import { GamesService } from '../games.service'
import { Game } from '../game'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { getGameList } from '../store/selectors';

@Component({
  selector: 'app-gameslist',
  templateUrl: './gameslist.component.html',
  styleUrls: ['./gameslist.component.scss']
})
export class GameslistComponent implements OnInit {

  @Input() 
  game: Game 


  games: Observable<Array<Game>>;

  constructor(private gamesService : GamesService, private store : Store<iState>) {   }

  ngOnInit() {
    this.games = this.store.select(getGameList)
    this.getGames()
    this.game = {
      id: null,
      name: "",
      price: null,
      description: "",
      storeLink: "",
      trailerUrl: "",
      upvotes: 0,
    }
  }

  getGames() {
   this.gamesService.allGames()
  }

  addGame(): void{
    this.gamesService.addGame(this.game)
    console.log(this.game)
  }

}
