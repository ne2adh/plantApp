import {
	LOGIN,
	LOGOUT,
	LOAD_DATA,
	DATA_LOADED,
	AUTH_CHECKED
} from '../actions/types';

const initial_state = {
	already_logged: false,
	auth_checked: false,
	loading: true,
	data: null
}


export default function loginReducer(state = initial_state, action) {
	
	switch (action.type) {
		case LOGIN:
			return { ...state, already_logged: true };
		case LOGOUT:
			return { ...state, already_logged: false };
		case LOAD_DATA:
			return { ...state, loading: true };
		case DATA_LOADED:
			return { ...state, loading: false, data: action.payload };
		case AUTH_CHECKED:
			return { ...state, auth_checked: true };
		default:
			return state
	}
}