import { SURPRISE } from '../constants/index';

export const surprise = (state = '', action) => {
	switch (action.type) {
		case SURPRISE:
			return action.payload;
		default:
			return state;
	}
}