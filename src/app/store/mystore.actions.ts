import { createAction,props } from '@ngrx/store'
import * as actionsConst from '../../utils/consts'
import {Game} from '../game'
import {User} from '../user'

export const updateGameList = createAction(actionsConst.UPDATE_GAME_LIST ,
                                            props<{gameList: Array<Game>;}>());
export const addToGameList = createAction(actionsConst.ADD_TO_GAME_LIST ,
                                            props<{ game: Game } >());
export const addUserToStore = createAction(actionsConst.LOGIN,
                                            props<{ user: User } >());

export const removeUserFromStore = createAction(actionsConst.LOGOUT);

export const updateSelectedGame =  createAction(actionsConst.UPDATE_SELECTED_GAME, 
                                                props<{game: Game}>())