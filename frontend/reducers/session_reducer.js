import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

// create a default state to set up a session for our user
const _nullSession = {                      //a POJO: a Plain Old Javascript Object
    currentUser: null,
};

//build out reducer
//every reducer takes in 2 arguments:
// 1. previous state
// 2. action

export default (state = _nullSession, action) => {
    Object.freeze(state);                   //won't accidentally mutate our state

    switch (action.type) {
        case RECEIVE_CURRENT_USER:          //if we receive current user, we return as our new slice of state, the current user nested under name, current user.
            return Object.assign({}, { currentUser: action.user }); //don't worry aobut previous state: current object = current user so we don't need to worry old user.
        case LOGOUT_CURRENT_USER:           //logging the user out: return the null session.
            return _nullSession;
        default:                            //default if we don't return anything; return state as it was before.
            return state;
    }
}