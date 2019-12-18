import { Component, OnInit, Input } from '@angular/core';
import { GameMinusId, Game } from '../game';
import { GamesService } from '../games.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { getSelectedGame } from '../store/selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editgameform',
  templateUrl: './editgameform.component.html',
  styleUrls: ['./editgameform.component.scss']
})
export class EditgameformComponent implements OnInit {

  @Input() 
  game: Game

  gameSub: Subscription
  game_id: Number;
  private subscription: Subscription;

  constructor(private router: Router,private route: ActivatedRoute,private gamesService : GamesService,private store : Store<iState>) { }

 



  ngOnInit() {

   this.gameSub = this.store.select(getSelectedGame).subscribe(game => {
        this.game = game
    })
    this.subscription = this.route.params.subscribe(event =>{
      this.game_id = event.id
      this.gamesService.getGamebyId(this.game_id)
    });
  }

  ngOnDestroy() {
    this.gameSub.unsubscribe()
  }

  editGame(): void {
    this.gamesService.updateGame(this.game)
    this.router.navigate(['/'])
  }
}
