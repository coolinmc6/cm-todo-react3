import { 
	CHANGE_AUTH
} from '../actions/types';

export function authentication(bool) {
	return {
		type: CHANGE_AUTH,
		payload: bool
	}
}

