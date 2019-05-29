import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {  //because state is an array of errors
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;   //sets errors to the action's errors
        case RECEIVE_CURRENT_USER:
            return [];              //clears the errors
        default:
            return state;
    }
}

export default sessionErrorsReducer;