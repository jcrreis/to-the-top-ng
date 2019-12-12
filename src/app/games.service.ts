import { Injectable } from '@angular/core';
import { Game } from './game'
import { Observable, of } from 'rxjs';
import axios  from '../utils/axios'
import {from} from 'rxjs';
import { Store } from '@ngrx/store';
import { iState } from './store/mystore.reducer';
import { updateGameList } from './store/mystore.actions';



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

  addGame(game: Game){
    axios.post<Game>(this.gamesUrl, game).then((response) => {
      return response.data
    }).catch((error) => {
      return error
    })
  }
}
