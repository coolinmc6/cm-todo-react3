import { combineReducers } from 'redux';	
import AuthenticateReducer from './reducer_authenticate'
	
const rootReducer = combineReducers({	
	authenticated: AuthenticateReducer
});	
	
export default rootReducer;	