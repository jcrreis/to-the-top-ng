import { createReducer,on, ActionReducerMap } from '@ngrx/store'
import * as StoreActions from './mystore.actions'
import { Game } from '../game'
import { User } from '../user'


export interface iState {
  gameInfo: iGameInfo
}

export interface iGameInfo {
  gameList: Array<Game> ;
  user: User;
  selectedGame: Game;
}

export const initialState: iGameInfo = {
      gameList: [],
      user: null,
      selectedGame: {
        id: 0,
        name: "",
        price: 0,
        description: "",
        storeLink: "",
        trailerUrl: "",
        upvotes: 0
      },
}


const _mystoreReducer = createReducer(
  initialState,
  on(StoreActions.updateGameList , (state, {gameList}) => ({...state, gameList: gameList})),
  on(StoreActions.addToGameList, (state,{game}) => ({...state , gameList: [...state.gameList,game]})),
  on(StoreActions.addUserToStore, (state,{user}) => ({...state , user: user})),
  on(StoreActions.removeUserFromStore, (state) => ({...state , user: null})),
  on(StoreActions.updateSelectedGame,(state,{game})=> ({...state,selectedGame:game}))
)

export const reducers: ActionReducerMap<iState> = {
  gameInfo: myStoreReducer
}


export function myStoreReducer(state,action){
  return _mystoreReducer(state,action)
}