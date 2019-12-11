import { Component, OnInit,Input } from '@angular/core';
import { GamesService } from '../games.service'
import { Game } from '../game'

@Component({
  selector: 'app-gameslist',
  templateUrl: './gameslist.component.html',
  styleUrls: ['./gameslist.component.scss']
})
export class GameslistComponent implements OnInit {

  @Input() gameIn: Game;

  games: Game[];

  constructor(private gamesService : GamesService) { }

  ngOnInit() {
    this.getGames()
  }

  getGames(): void {
    this.gamesService.allGames().subscribe(games => this.games = games) 
  }

  addGame(): void{
    this.gamesService.addGame(this.gameIn).subscribe()
  }

}
