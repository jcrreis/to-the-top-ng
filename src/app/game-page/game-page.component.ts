import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscribableOrPromise } from 'rxjs';
import { OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { Game } from '../game';
import { GamesService } from '../games.service';
import {GameResponse} from '../../utils/interfaces'

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})



export class GamePageComponent implements OnInit {

  game_id: Number;
  private subscription: Subscription;
  private subscription2: Subscription;
  game: Game;


  constructor(private route: ActivatedRoute,private gamesService : GamesService) { }

  ngOnInit() {
    this.game = {
      id: 0,
      name: "",
      price: 0,
      description: "",
      storeLink: "",
      trailerUrl: "",
      upvotes: 0
    }
   this.subscription = this.route.params.subscribe(event =>{
      this.game_id = event.id
    });
    this.subscription2 = this.gamesService.getGamebyId(this.game_id).subscribe((response:GameResponse) => {
      this.game = response.data
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
