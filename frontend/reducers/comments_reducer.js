import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_TRACK } from '../actions/track_actions';
import { merge } from 'lodash';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_TRACK:                             // you can use this syntax
        case RECEIVE_COMMENTS:
            return action.comments // this line is here bc otherwise the RECEIVE_TRACK normal action creator will completely bypass the comments and go directly to default
        case RECEIVE_COMMENT:
            return merge({}, oldState, { [action.comment.id]: action.comment })
        case REMOVE_COMMENT:
            let newState = merge({}, oldState)
            delete newState[action.commentId]
            return newState
        default:
            return oldState
    }
};

export default commentsReducer;