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
  upvotedGameList: Array<Game>;
  createdGameList: Array<Game>;
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
      upvotedGameList: [],
      createdGameList: [],
}


const _mystoreReducer = createReducer(
  initialState,
  on(StoreActions.updateGameList , (state, {gameList}) => ({...state, gameList: gameList})),

  on(StoreActions.addToGameList, (state,{game}) => ({...state , gameList: [...state.gameList,game]})),

  on(StoreActions.removeFromGameList, (state,{gameId})=> ({...state,
     gameList: [...state.gameList.filter(function (el){return el.id != gameId;})]})),

  on(StoreActions.addUserToStore, (state,{user}) => ({...state , user: user})),

  on(StoreActions.removeUserFromStore, (state) => ({...state , user: null})),

  on(StoreActions.updateSelectedGame,(state,{game})=> ({...state,selectedGame:game})),

  on(StoreActions.updateGameInGameList,(state,{game})=> ({...state,
    gameList: state.gameList.map((el) => (el.id === game.id ? game : el))})),

  on(StoreActions.updateUpvotedGameList, (state,{upvotedGameList})=> ({...state,
    upvotedGameList: upvotedGameList})), 

  on(StoreActions.addToUpvotedGameList, (state,{game})=> ({...state,
    upvotedGameList: [...state.upvotedGameList,game]})),

  on(StoreActions.removeFromUpvotedGameList, (state,{gameId})=> ({...state,
  upvotedGameList: [...state.upvotedGameList.filter(function (el){return el.id != gameId;})]})), 

  on(StoreActions.updateCreatedGameList, (state,{createdGameList})=> ({...state,
    createdGameList:createdGameList})),

  on(StoreActions.addToCreatedGameList, (state,{game})=> ({...state,
    createdGameList: [...state.createdGameList,game]})),

  on(StoreActions.removeFromCreatedGameList, (state,{gameId})=> ({...state,
    createdGameList: [...state.createdGameList.filter(function (el){return el.id != gameId;})]})), 

  on(StoreActions.addUpvoteToCreatedGame,(state,{gameId}) =>({...state,
    
  }))  

)

export const reducers: ActionReducerMap<iState> = {
  gameInfo: myStoreReducer
}


export function myStoreReducer(state,action){
  return _mystoreReducer(state,action)
}