import { ADD_NUMBER, INCREMENT, DECREMENT } from '../constants/index';

export const count = (state = 0, action) => {
	switch (action.type) {
		case ADD_NUMBER:
			return state + action.payload;
	    case INCREMENT:
	    	return state + 1;
	    case DECREMENT:
	    	return state - 1;
		default:
			return state;
	}
}