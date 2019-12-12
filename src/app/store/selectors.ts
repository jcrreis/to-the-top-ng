import { createFeatureSelector, createSelector } from "@ngrx/store";
import { iGameInfo } from './mystore.reducer';
import { User } from '../user';

export const getInfo = createFeatureSelector<iGameInfo>('gameInfo');


export const getUser = createSelector(getInfo,(state: iGameInfo): User => state.user)