import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscribableOrPromise, Observable } from 'rxjs';
import { OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { Game } from '../game';
import { GamesService } from '../games.service';
import {GameResponse} from '../../utils/interfaces'
import { getSelectedGame } from '../store/selectors';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})



export class GamePageComponent implements OnInit {

  game_id: Number;
  private subscription: Subscription;
  game: Observable<Game>;


  constructor(private route: ActivatedRoute,private gamesService : GamesService,private store : Store<iState>) { }

  ngOnInit() {

  this.game = this.store.select(getSelectedGame)   
  this.subscription = this.route.params.subscribe(event =>{
      this.game_id = event.id
      this.gamesService.getGamebyId(this.game_id)
    });
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
