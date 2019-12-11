import { Component, OnInit,Input } from '@angular/core';
import { GamesService } from '../games.service'
import { Game } from '../game'

@Component({
  selector: 'app-gameslist',
  templateUrl: './gameslist.component.html',
  styleUrls: ['./gameslist.component.scss']
})
export class GameslistComponent implements OnInit {

  @Input() 
  game: Game 


  games: Game[];

  constructor(private gamesService : GamesService) { }

  ngOnInit() {
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
    this.games = this.gamesService.allGames()
  }

  addGame(): void{
    this.gamesService.addGame(this.game)
    console.log(this.game)
  }

}
