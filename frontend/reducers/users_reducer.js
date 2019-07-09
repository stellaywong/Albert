import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ANNOTATIONS } from '../actions/annotation_actions';
import { merge } from 'lodash';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ANNOTATIONS:
            return merge({}, oldState, action.users);
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, { [action.currentUser.id]: action.currentUser });
        default:
            return oldState;
    }
};

export default usersReducer;
