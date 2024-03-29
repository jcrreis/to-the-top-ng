import { createAction,props } from '@ngrx/store'
import * as actionsConst from '../../utils/consts'
import {Game} from '../game'
import {User} from '../user'

export const updateGameList = createAction(actionsConst.UPDATE_GAME_LIST ,
                                            props<{gameList: Array<Game>;}>());
export const addToGameList = createAction(actionsConst.ADD_TO_GAME_LIST ,
                                            props<{ game: Game } >());

export const removeFromGameList = createAction(actionsConst.REMOVE_FROM_GAME_LIST ,
                                               props<{gameId: Number}>())

export const addUserToStore = createAction(actionsConst.LOGIN,
                                            props<{ user: User } >());

export const removeUserFromStore = createAction(actionsConst.LOGOUT);

export const updateSelectedGame =  createAction(actionsConst.UPDATE_SELECTED_GAME, 
                                                props<{game: Game}>())

export const updateGameInGameList  = createAction(actionsConst.UPDATE_GAME_IN_GAME_LIST,
                                                  props<{game: Game}>())

export const updateUpvotedGameList = createAction(actionsConst.UPDATE_UPVOTE_GAME_LIST,
                                                 props<{upvotedGameList: Array<Game>}>())

export const addToUpvotedGameList = createAction(actionsConst.ADD_TO_UPVOTED_GAME_LIST,
                                                 props<{game: Game}>())

export const removeFromUpvotedGameList = createAction(actionsConst.REMOVE_FROM_UPVOTED_GAME_LIST,
                                                      props<{gameId: Number}>())
                                            
export const updateCreatedGameList = createAction(actionsConst.UPDATE_CREATED_GAME_LIST,
                                                        props<{createdGameList: Array<Game>}>())
        
export const addToCreatedGameList = createAction(actionsConst.ADD_TO_CREATED_GAME_LIST,
                                                        props<{game: Game}>())
       
export const removeFromCreatedGameList = createAction(actionsConst.REMOVE_FROM_CREATED_GAME_LIST,
                                                             props<{gameId: Number}>())

export const upvoteGame = createAction(actionsConst.UPVOTE_GAME ,
                                        props<{game: Game}>())

export const downvoteGame = createAction(actionsConst.DOWNVOTE_GAME,
                                         props<{game:Game}>())

export const addUpvoteToCreatedGame = createAction(actionsConst.ADD_UPVOTE_TO_CREATED_GAME ,
                                                    props<{gameId: Number}>())
                                                  
export const removeUpvoteFromCreatedGame = createAction(actionsConst.REMOVE_UPVOTE_FROM_CREATED_GAME,
                                                        props<{gameId: Number}>())

export const removeGameFromStore = createAction(actionsConst.REMOVE_GAME_FROM_STORE,
                                                        props<{gameId: Number}>())
                        
export const updateGameFromStore = createAction(actionsConst.UPDATE_GAME_FROM_STORE,
                                                        props<{game: Game}>())
