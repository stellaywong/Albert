import * as VoteApiUtil from '../util/vote_api_util';

export const RECEIVE_ANNOTATION_VOTE = "RECEIVE_ANNOTATION_VOTE";
export const RECEIVE_COMMENT_VOTE = "RECEIVE_COMMENT_VOTE";

const receiveAnnotationVote = (vote, id) => {
    return ({
        type: RECEIVE_ANNOTATION_VOTE,
        vote,
        id
    })
}

const receiveCommentVote = (vote, id) => {
    return ({
        type: RECEIVE_COMMENT_VOTE,
        vote,
        id
    })
}

export const upvoteAnnotation = (id) => {
    return (dispatch) => {
        return VoteApiUtil.upvoteAnnotation(id).then((vote) => {
            return dispatch(receiveAnnotationVote(vote, id))
        })
    }
}

export const downvoteAnnotation = (id) => {
    return (dispatch) => {
        return VoteApiUtil.downvoteAnnotation(id).then((vote) => {
            return dispatch(receiveAnnotationVote(vote, id))
        })
    }
}

export const upvoteComment = (id) => {
    return (dispatch) => {
        return VoteApiUtil.upvoteComment(id).then((vote) => {
            return dispatch(receiveCommentVote(vote, id))
        })
    }
}

export const downvoteComment = (id) => {
    return (dispatch) => {
        return VoteApiUtil.downvoteComment(id).then((vote) => {
            return dispatch(receiveCommentVote(vote, id))
        })
    }
}