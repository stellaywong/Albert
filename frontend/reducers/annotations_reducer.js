import { RECEIVE_ANNOTATIONS, RECEIVE_ANNOTATION, REMOVE_ANNOTATION } from '../actions/annotation_actions';
import { RECEIVE_ANNOTATION_VOTE } from '../actions/vote_actions';
import { RECEIVE_TRACK } from '../actions/track_actions';
import { merge } from 'lodash';

const annotationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ANNOTATIONS:
            return merge({}, oldState, action.annotations)
        case RECEIVE_TRACK:
            return merge({}, oldState, action.annotations) 
        case RECEIVE_ANNOTATION:
            return merge({}, oldState, { [action.annotation.id]: action.annotation })       // debugged for annotationShow -- syntax
        case REMOVE_ANNOTATION:
            let newState = merge({}, oldState)
            delete newState[action.annotationId]
            return newState
        case RECEIVE_ANNOTATION_VOTE:
            let newAnnotationState = oldState[action.id];

            newAnnotationState.votes += action.vote;
            
            return merge({}, oldState, { [newAnnotationState.id]: newAnnotationState })       // debugged for annotationShow -- syntax

        default:
            return oldState
    }
};

export default annotationsReducer;

// when we get the track show, we send in 2 objects: tracks and annotations. you need it in 2 places (track reducer, and annotation reducer) to catch all the information