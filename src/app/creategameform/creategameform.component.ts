import { Component, OnInit } from '@angular/core';
import { GameMinusId } from '../game';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-creategameform',
  templateUrl: './creategameform.component.html',
  styleUrls: ['./creategameform.component.scss']
})
export class CreategameformComponent implements OnInit {

  game: GameMinusId 

  constructor(private gamesService: GamesService ) {}

  ngOnInit() {
    this.game = {
      name: "",
      price: null,
      description: "",
      storeLink: "",
      trailerUrl: "",
      upvotes: 0,
    }
  }

  addGame(): void{
    this.gamesService.addGame(this.game)
  }

}
