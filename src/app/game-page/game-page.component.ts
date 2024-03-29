import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscribableOrPromise, Observable } from 'rxjs';
import { OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { Game, GameMinusId } from '../game';
import { GamesService } from '../games.service';
import {GameResponse} from '../../utils/interfaces'
import { getSelectedGame,getUser } from '../store/selectors';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { User } from '../user';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})



export class GamePageComponent implements OnInit {

  game_id: Number;
  private subscription: Subscription;
  game: Observable<Game>;
  user: Observable<User>;
  editableGame: boolean;
  gameSub: Subscription;
  userSub: Subscription;
  gameObject: GameMinusId
  trailer_url: any
  isFirst : boolean = true
  constructor(private embedService: EmbedVideoService,private router: Router,private route: ActivatedRoute,private gamesService : GamesService,private store : Store<iState>) { }

  ngOnInit() {
  this.user = this.store.select(getUser)
  this.game = this.store.select(getSelectedGame)   
  this.subscription = this.route.params.subscribe(event =>{
      this.game_id = event.id
      this.gamesService.getGamebyId(this.game_id)
    });
  this.editableGame = false
    
  this.userSub = this.user.subscribe(user => {
    this.gameSub = this.game.subscribe(game => {
      if(game.id == this.game_id){
        debugger
        this.gameObject = game
        this.editableGame = game.user === user.id
        this.trailer_url = this.embedService.embed(game.trailerUrl)
      }
      this.gameObject = game
      if(user != null)
        this.editableGame = game.user === user.id
    })
  })
  }

  deleteGame(): void{
    this.gamesService.deleteGame(this.game_id);
    this.router.navigate(['/'])
  }

  navigateToEditForm(): void {
    this.router.navigate(['/edit',this.game_id])
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.userSub.unsubscribe();
    this.gameSub.unsubscribe();
  }

}
