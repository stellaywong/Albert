import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = ({comments, users}) => {
    return ({
        type: RECEIVE_COMMENTS,
        comments,
        users
    })
}

const receiveComment = ({comment, user}) => {
    return ({
        type: RECEIVE_COMMENT,
        comment,
        user
    })
}

const removeComment = (id) => {
    return ({
        type: REMOVE_COMMENT,
        commentId: id   // points to id, not comment.id
    })
}

export const fetchComments = (trackId) => {
    return (dispatch) => {
        return CommentApiUtil.fetchComments(trackId).then((payload) => {
            return dispatch(receiveComments(payload));
        })
    }
}

export const fetchComment = (id) => {
    return (dispatch) => {
        return CommentApiUtil.fetchComment(id).then((promiseObject) => {
            return dispatch(receiveComment(promiseObject));
        })
    }
}

export const createComment = (comment) => {
    return (dispatch) => {
        return CommentApiUtil.createComment(comment).then((payload) => {
            return dispatch(receiveComment(payload));
        })
    }
}

export const updateComment = (comment) => {
    return (dispatch) => {
        return CommentApiUtil.updateComment(comment).then((promiseObject) => {
            return dispatch(receiveComment(promiseObject));
        })
    }
}

export const deleteComment = (id) => {
    return (dispatch) => {
        return CommentApiUtil.deleteComment(id).then((promiseObject) => {
            return dispatch(removeComment(promiseObject));
        })
    }
}