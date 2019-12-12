import { createReducer,on } from '@ngrx/store'
import * as StoreActions from './mystore.actions'
import {Game} from '../game'

export interface State {
  gameList: Array<Game> ;

}

export const initalState: State = {
      gameList: [],
}

const _mystoreReducer = createReducer(
  initalState,
  on(StoreActions.updateGameList , (state, {gameList}) => ({...state,gameList: gameList})),
  on(StoreActions.addToGameList, (state,{game}) => ({...state , gameList: [...state.gameList,game]}))
  
  )

export function myStoreReducer(state,action){
  return _mystoreReducer(state,action)
}