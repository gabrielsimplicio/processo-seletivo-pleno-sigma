import {comicReducer} from './comics/reducer';
import {characterReducer} from './characters/reducer';
import {chartReducer} from './cart/reducer'


import {combineReducers} from 'redux';

export const Reducers = combineReducers({
    comicReducer: comicReducer,
    characterReducer: characterReducer,
    chartReducer: chartReducer
})