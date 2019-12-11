import { Injectable } from '@angular/core';
import { Game } from './game'
import { Observable, of } from 'rxjs';
import axios  from '../utils/axios'
import {from} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private gamesUrl = 'http://localhost:8000/games/'

  allGames (): Observable<Array<Game>>{
    const observable$ = axios.get<Game[]>(this.gamesUrl)
    return observable$
   
  }

  addGame(game: Game){
    axios.post<Game>(this.gamesUrl, game).then((response) => {
      return response.data
    }).catch((error) => {
      return error
    })
  }
}
