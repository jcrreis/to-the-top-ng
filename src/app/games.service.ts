import { Injectable } from '@angular/core';
import { Game ,GameMinusId} from './game'
import { Observable, of } from 'rxjs';
import axios  from '../utils/axios'
import {from} from 'rxjs';
import { Store } from '@ngrx/store';
import { iState } from './store/mystore.reducer';
import { updateGameList,addToGameList, updateSelectedGame, updateGameInGameList, addToUpvotedGameList, removeFromUpvotedGameList, updateCreatedGameList, removeFromCreatedGameList, addToCreatedGameList, upvoteGame, downvoteGame } from './store/mystore.actions';



@Injectable({
  providedIn: 'root'
})

export class GamesService {

  private gamesUrl = 'http://localhost:8000/games/'
  private upvoteUrl = 'http://localhost:8000/upvotes/games/'

  constructor(private store : Store<iState>) { }

  allGames (): void{
   axios.get<Game[]>(this.gamesUrl).then(response => {
    this.store.dispatch(updateGameList({gameList: response.data}))
   }).catch(error => {
     console.log(error.msg)
   })
   
  }

  addGame(game: GameMinusId){
    axios.post<Game>(this.gamesUrl, game).then((response) => {
      this.store.dispatch(addToGameList({game: response.data}))
      return response.data
    }).catch((error) => {
      return error
    })
  }
  getGamebyId(id : Number){
    axios.get<Game>(this.gamesUrl + id).then(response => {
      this.store.dispatch(updateSelectedGame({game: response.data}))
    }).catch(error => {

    })
  }

  upvoteGame(id: Number){
    const data = {
      game: id
    }
    axios.post(this.upvoteUrl + id, data).then(response => {
      this.store.dispatch(upvoteGame({game: response.data}))
      this.store.dispatch(addToUpvotedGameList({game:response.data}))
    })
  }
  delUpvoteGame(id: Number){
    const data = {
      game: id
    }
    axios.delete(this.upvoteUrl + id, data).then(response => {
      this.store.dispatch(downvoteGame({game: response.data}))
      this.store.dispatch(removeFromUpvotedGameList({gameId:response.data.id}))
    })
  }
  
}
