
import {environment} from 'src/environments/environment';

//STORE CONSTS
export const UPDATE_GAME_LIST = "updateGameList"
export const ADD_TO_GAME_LIST = "addToGameList"
export const REMOVE_FROM_GAME_LIST = "removeFromGameList"
export const UPDATE_USER = "updateUser"
export const LOGIN = "loginUser"
export const LOGOUT = "logoutUser"
export const UPDATE_SELECTED_GAME = "updateSelectedGame"
export const UPDATE_GAME_IN_GAME_LIST = "updateGameInGameList"
export const UPDATE_UPVOTE_GAME_LIST = "updateUpvoteGameList"
export const ADD_TO_UPVOTED_GAME_LIST = "addToUpvotedGameList"
export const REMOVE_FROM_UPVOTED_GAME_LIST = "removeFromUpvotedGameList"
export const UPDATE_CREATED_GAME_LIST = "createdGameList"
export const ADD_TO_CREATED_GAME_LIST = "addToCreatedGameList"
export const REMOVE_FROM_CREATED_GAME_LIST = "removeFromCreatedGameList"
export const UPVOTE_GAME = "upvoteGame"
export const DOWNVOTE_GAME = "downvoteGame"
export const ADD_UPVOTE_TO_CREATED_GAME = "addUpvoteToCreatedGame"
export const REMOVE_UPVOTE_FROM_CREATED_GAME = "removeUpvoteFromCreateGame"
export const REMOVE_GAME_FROM_STORE = "removeGameFromStore"
export const UPDATE_GAME_FROM_STORE = "updateGameFromStore"


//BACKEND URL 

//export const BACKEND_URL = "https://to-the-top.herokuapp.com/"

let url

if(!environment.production) {
   url = "http://localhost:8000/"
}
else {
  url = "https://to-the-top.herokuapp.com/"
}

export const BACKEND_URL = url;