import counterReducer from './counter';
import loggedReducer from './loggedReducer';
import { combineReducers } from 'redux';

const allReducers=combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer
});

export default  allReducers;