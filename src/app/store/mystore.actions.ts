import { createAction,props } from '@ngrx/store'
import * as actionsConst from '../../utils/consts'
import {Game} from '../game'

export const updateGameList = createAction(actionsConst.UPDATE_GAME_LIST ,
                                            props<{gameList: Array<Game>;}>());
export const addToGameList = createAction(actionsConst.ADD_TO_GAME_LIST ,
                                            props<{ game: Game } >());
