import { postUser, postSession, deleteSession } from '../utils/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";     // safeguard against typos
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";       // safeguard against typos

// normal action creators: return a POJO with a type and some kind of payload
// receive our current user
const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user: user,
});                                                         // user is payload, and whatever properties it has on it.

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})                                                          // doesn't need to take in any values -- return the same.
                                                            // no payload; pass message to reducers saying yes we logged user out.

// THUNK action creators
                                                            // takes in a user object from a form
                                                            // curry and receive dispatch from our Thunk middleware
                                                            // call our postUser method imported from above, with formUser from form.


//sign up new user
export const createNewUser = (formUser) => {
    return dispatch => {
        return postUser(formUser).then(user => 
            dispatch(receiveCurrentUser(user))              //implicit return
        );
    }
}                 
//upon sucessful login, dispatch current user w/ the user object we just received

//sign in our user
export const login = (formUser) => {
    return dispatch => {
        return postSession(formUser).then(user => 
            dispatch(receiveCurrentUser(user))
        );
    }
}                 
//upon sucessful login, dispatch current user with the user object we just received
                                                                
//sign out our user
export const logout = () => {
    return dispatch => {
        return deleteSession().then(() => 
            dispatch(logoutCurrentUser())
        );
    }
}                 
                                                            // it won't pass us info back, but we want to call a callback
//create place in state where we can STORE information about current user