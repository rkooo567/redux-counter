import { createStore, combineReducers } from 'redux';
import { count } from './count';
import { surprise } from './surprise';

export const store = createStore(combineReducers({
	count,
	surprise
}));

