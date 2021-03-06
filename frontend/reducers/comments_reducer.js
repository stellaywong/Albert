import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_TRACK } from '../actions/track_actions';
import { RECEIVE_COMMENT_VOTE } from '../actions/vote_actions';
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
        case RECEIVE_COMMENT_VOTE:
            let newCommentState = oldState[action.id];

            newCommentState.votes += action.vote;

            return merge({}, oldState, { [newCommentState.id]: newCommentState })       // debugged for annotationShow -- syntax
        default:
            return oldState
    }
};

export default commentsReducer;