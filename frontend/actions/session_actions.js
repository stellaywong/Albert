import { postUser, postSession, deleteSession } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";     // safeguard against typos
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";       // safeguard against typos
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

// normal action creators: 
    // return a POJO with a type and some kind of payload

export const receiveCurrentUser = (currentUser) => {       // receive our current user
    // debugger
    return {type: RECEIVE_CURRENT_USER,
    currentUser}
};                                                         // user is payload, and whatever properties it has on it.

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})                                                          // doesn't need to take in any values -- return the same.
                                                            // no payload; pass message to reducers saying yes we logged user out.
export const receiveErrors = (errors) => ({                 // errors is an array
    type: RECEIVE_SESSION_ERRORS,
    errors,
})

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

// THUNK action creators
    // takes in a user object from a form
    // curry and receive dispatch from our Thunk middleware
    // call our postUser method imported from above, with formUser from form.


//sign up new user
export const signup = (user) => {
    return dispatch => {
        return postUser(user).then(
            (user) => dispatch(receiveCurrentUser(user)),
            (err) => dispatch(receiveErrors(err.responseJSON))             //implicit return
        );
    }
}                 
//upon sucessful login, dispatch current user w/ the user object we just received

//sign in our user
export const signin = (user) => {
    return dispatch => {
        return postSession(user).then(
            (user) => dispatch(receiveCurrentUser(user)),
            (err) => dispatch(receiveErrors(err.responseJSON))
        );
    }
}                 
//upon sucessful login, dispatch current user with the user object we just received
                                                                
//sign out our user
export const logout = () => {
    return dispatch => {
        return deleteSession().then(
            () => dispatch(logoutCurrentUser()),
            (err) => dispatch(receiveErrors(err.responseJSON))
        );
    }
}                 
                                                            // it won't pass us info back, but we want to call a callback
//create place in state where we can STORE information about current user