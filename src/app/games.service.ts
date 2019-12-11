import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from './game'
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private gamesUrl = 'http://localhost:8000/games/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
   
  };


  constructor(private http: HttpClient) { }

  allGames ():Observable<Game[]>{
    return this.http.get<Game[]>(this.gamesUrl)
  }

  addGame(game: Game){
    return this.http.post<Game>(this.gamesUrl, game, this.httpOptions)
  }
}
