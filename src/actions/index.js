import { ADD_NUMBER, INCREMENT, DECREMENT, SURPRISE } from '../constants/index';

export const addNumber = (number) => {
	return {
		type: ADD_NUMBER,
		payload: number
	}
}

export const increment = () => {
	return {
		type: INCREMENT,
	}
}


export const decrement = () => {
	return {
		type: DECREMENT,
	}
}

export const surprise = () => {
	return {
		type: SURPRISE,
		payload: "love youuu!"
	}
}