import { createFeatureSelector, createSelector } from "@ngrx/store";
import { iGameInfo } from './mystore.reducer';
import { User } from '../user';
import { Game } from '../game';

export const getInfo = createFeatureSelector<iGameInfo>('gameInfo');


export const getUser = createSelector(getInfo,(state: iGameInfo): User => state.user)
export const getGameList = createSelector(getInfo, (state: iGameInfo):Array<Game> => state.gameList)