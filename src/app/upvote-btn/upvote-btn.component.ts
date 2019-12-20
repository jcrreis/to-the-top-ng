import { Component, OnInit, Input } from '@angular/core';
import { GamesService } from '../games.service';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { getUpvotedGames, getUser } from '../store/selectors';
import { Subscription } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-upvote-btn',
  templateUrl: './upvote-btn.component.html',
  styleUrls: ['./upvote-btn.component.scss']
})
export class UpvoteBtnComponent implements OnInit {
  
  @Input()  gameId: Number

  isUpvoted: Boolean
  private subscription: Subscription;
  userID: Number
  private subscription2: Subscription;
  constructor(private gamesService : GamesService,private store : Store<iState>) { }

  ngOnInit() {
    this.subscription = this.store.select(getUpvotedGames).subscribe(event => {
      this.isUpvoted = (event.some(el => el.id == this.gameId))
    })
    this.subscription2 = this.store.select(getUser).subscribe(event => {
      this.userID = (event.id)
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
    this.subscription2.unsubscribe()
  }

  upvoteGame(event){
    this.gamesService.upvoteGame(this.gameId)
    event.stopPropagation();
  }
  delUpvoteGame(event){
    this.gamesService.delUpvoteGame(this.gameId)
    event.stopPropagation();
  }

}
