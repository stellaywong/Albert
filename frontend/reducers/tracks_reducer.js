import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';
import { merge } from 'lodash';

const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_TRACKS:
            return merge({}, oldState, action.tracks)
        case RECEIVE_TRACK:
            return merge({}, oldState, { [action.track.id]: action.track })       // debugged for trackShow -- syntax
        case REMOVE_TRACK:
            let newState = merge({}, oldState)
            delete newState[action.trackId]
            return newState
        default:
            return oldState
    }
};

export default tracksReducer;