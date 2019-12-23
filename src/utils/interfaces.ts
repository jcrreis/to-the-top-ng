import {Game} from '../app/game'
import { User } from 'src/app/user';


export interface GameResponse {
  data: Game
}

export interface UserResponse {
  data: User
}

export interface GameArrayResponse{
  data: Array<Game>
}

export interface ErrorMessage{
  active: boolean,
  message: string,
}

export interface ErrorMessage{
  active: boolean,
  message: string,
}