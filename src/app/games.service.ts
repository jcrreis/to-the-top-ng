import { Injectable } from '@angular/core';
import { Game ,GameMinusId, GameMinusIdWithImage} from './game'
import { Observable, of } from 'rxjs';
import axios  from '../utils/axios'
import {from} from 'rxjs';
import { Store } from '@ngrx/store';
import { iState } from './store/mystore.reducer';
import { updateGameList,addToGameList, updateSelectedGame, updateGameInGameList, addToUpvotedGameList, removeFromUpvotedGameList, updateCreatedGameList, removeFromCreatedGameList, addToCreatedGameList,removeGameFromStore, updateGameFromStore, upvoteGame, downvoteGame } from './store/mystore.actions';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class GamesService {

  private gamesUrl = 'http://localhost:8000/games/'
  private upvoteUrl = 'http://localhost:8000/upvotes/games/'

  constructor(private store : Store<iState>, private router: Router) { }

  allGames (): void{
   axios.get<Game[]>(this.gamesUrl).then(response => {
    this.store.dispatch(updateGameList({gameList: response.data}))
   }).catch(error => {
     console.log(error.msg)
   })
   
  }

  addGame(game: FormData){
    axios.post<Game>(this.gamesUrl, game).then((response) => {
      this.store.dispatch(addToGameList({game: response.data}))
      this.store.dispatch(addToCreatedGameList({game: response.data}))
      this.router.navigate(['/']);
    }).catch((error) => {
      
    })
  }
  getGamebyId(id : Number){
    axios.get<Game>(this.gamesUrl + id).then(response => {
      this.store.dispatch(updateSelectedGame({game: response.data}))
    }).catch(error => {

    })
  }

  upvoteGame(game_id: Number){
    const data = {
      game: game_id
    }
    axios.post(this.upvoteUrl + game_id ).then(response => {
      this.store.dispatch(upvoteGame({game: response.data}))
      this.store.dispatch(addToUpvotedGameList({game:response.data}))
    })
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
    axios.delete('http://localhost:8000/games/'+id).then(() => {
      this.store.dispatch(removeGameFromStore({gameId: id}))
    })
  }

  updateGame(game: FormData,game_id:Number){
    axios.put('http://localhost:8000/games/'+game_id, game).then((response) => {
      const newGame: Game = response.data
      this.store.dispatch(updateGameFromStore({game: newGame}))
    });
  }
  
}
