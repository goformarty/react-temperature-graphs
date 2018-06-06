import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
	console.log('Action received', action);
	switch(action.type) {
		case FETCH_WEATHER:
			return [ action.pauload.data, ...state ];
	}
	return state; 
}