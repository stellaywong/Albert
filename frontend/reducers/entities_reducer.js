import { combineReducers } from 'redux';
import usersReducer from './users_reducer'; // from the same reducers folder

const entitiesReducer = combineReducers({
    users: usersReducer                     // a single key-value pair for now named users which points to the usersReducer
});

export default entitiesReducer;