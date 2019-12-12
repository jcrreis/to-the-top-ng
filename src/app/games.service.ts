import { Injectable } from '@angular/core';
import { Game ,GameMinusId} from './game'
import { Observable, of } from 'rxjs';
import axios  from '../utils/axios'
import {from} from 'rxjs';
import { Store } from '@ngrx/store';
import { iState } from './store/mystore.reducer';
import { updateGameList,addToGameList } from './store/mystore.actions';



@Injectable({
  providedIn: 'root'
})

export class GamesService {

  private gamesUrl = 'http://localhost:8000/games/'

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
    const observable = from(axios.get<Game>(this.gamesUrl + id))
    return observable
  }
}
