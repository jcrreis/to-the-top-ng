import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from './game'
import { Observable, of } from 'rxjs';
import axios  from '../utils/axios'



@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private gamesUrl = 'http://localhost:8000/games/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
   
  };


  constructor(private http: HttpClient) { }

  allGames (): Game[]{
    axios.get<Game[]>(this.gamesUrl).then((response)=>{
      return response.data
    })
    return null
  }

  addGame(game: Game){
    axios.post<Game>(this.gamesUrl, game).then((response) => {
      return response.data
    }).catch((error) => {
      return error
    })
  }
}
