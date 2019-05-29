import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({     // combineReducers is a function that takes in an object
    session: sessionErrorsReducer
});

export default errorsReducer;