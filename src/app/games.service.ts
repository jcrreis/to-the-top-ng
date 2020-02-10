import { Injectable } from '@angular/core';
import { Game ,GameMinusId, GameMinusIdWithImage} from './game'
import { Observable, of } from 'rxjs';
import axios  from '../utils/axios'
import {from} from 'rxjs';
import { Store } from '@ngrx/store';
import { iState } from './store/mystore.reducer';
import { updateGameList,addToGameList, updateSelectedGame, updateGameInGameList, addToUpvotedGameList, removeFromUpvotedGameList, updateCreatedGameList, removeFromCreatedGameList, addToCreatedGameList,removeGameFromStore, updateGameFromStore, upvoteGame, downvoteGame } from './store/mystore.actions';
import { Router } from '@angular/router';
import {BACKEND_URL} from '../utils/consts'


@Injectable({
  providedIn: 'root'
})

export class GamesService {

  private gamesUrl = BACKEND_URL + 'games/'
  private upvoteUrl = BACKEND_URL + 'upvotes/games/'

  constructor(private store : Store<iState>, private router: Router) { }

  allGames (): void{
   axios.get<Game[]>(this.gamesUrl).then(response => {
    this.store.dispatch(updateGameList({gameList: response.data}))
   }).catch(error => {
   })
   
  }

  

  addGame(game: FormData):Observable<any>{
    const observable = from(axios.post<Game>(this.gamesUrl, game))
    return observable
  }
  getGamebyId(id : Number){
    axios.get<Game>(this.gamesUrl + id).then(response => {
      this.store.dispatch(updateSelectedGame({game: response.data}))
    }).catch(error => {

    })
  }

  upvoteGame(game_id: Number): Observable<any>{
    const data = {
      game: game_id
    }
    
    return from(axios.post(this.upvoteUrl + game_id ))
  }

  delUpvoteGame(id: Number){
    const data = {
      game: id
    }
    axios.delete(this.upvoteUrl+id).then(response => {
      this.store.dispatch(downvoteGame({game: response.data}))
      this.store.dispatch(removeFromUpvotedGameList({gameId:response.data.id}))
    })
  }

  deleteGame(id: Number){
    axios.delete(this.gamesUrl+id).then(() => {
      this.store.dispatch(removeGameFromStore({gameId: id}))
    })
  }

  updateGame(game: FormData,game_id:Number){
    axios.put( this.gamesUrl+game_id, game).then((response) => {
      const newGame: Game = response.data
      this.store.dispatch(updateGameFromStore({game: newGame}))
      this.router.navigate(['/'])
    });
  }
  
}
