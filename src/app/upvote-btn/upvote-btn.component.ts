import { Component, OnInit, Input } from '@angular/core';
import { GamesService } from '../games.service';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { getUpvotedGames, getUser } from '../store/selectors';
import { Subscription } from 'rxjs';
import { upvoteGame, addToUpvotedGameList } from '../store/mystore.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upvote-btn',
  templateUrl: './upvote-btn.component.html',
  styleUrls: ['./upvote-btn.component.scss']
})
export class UpvoteBtnComponent implements OnInit {
  
  @Input()  gameId: Number

  shouldBeDisabled: boolean = false

  isUpvoted: Boolean
  private subscription: Subscription;
  constructor(private router: Router,private gamesService : GamesService,private store : Store<iState>) { }

  ngOnInit() {
    this.subscription = this.store.select(getUpvotedGames).subscribe(event => {
      this.isUpvoted = (event.some(el => el.id == this.gameId))
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()

  }

  upvoteGame(event){
    event.preventDefault()
    this.shouldBeDisabled = true
    this.gamesService.upvoteGame(this.gameId).subscribe((response) => {
      this.store.dispatch(upvoteGame({game: response.data}))
      this.store.dispatch(addToUpvotedGameList({game:response.data}))
      this.shouldBeDisabled = false
    },() => {
      this.router.navigate(['/login'])
    })
    event.stopPropagation();
  }
  delUpvoteGame(event){
    event.preventDefault()
    this.gamesService.delUpvoteGame(this.gameId)
    event.stopPropagation();
  }

}
