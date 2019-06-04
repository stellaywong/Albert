import { RECEIVE_ARTISTS, RECEIVE_ARTIST, REMOVE_ARTIST } from '../actions/artist_actions';
// import { RECEIVE_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';

import { merge } from 'lodash';

const artistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ARTISTS:
            return merge({}, oldState, action.artists)
        // case RECEIVE_TRACKS:                        //for tracks, not artist
        //     return merge({}, oldState, action.artists)
        case RECEIVE_ARTIST:
            return merge({}, oldState, { [action.artist.id]: action.artist })
        // case RECEIVE_TRACK:                     //for tracks, not artist
        //     return merge({}, oldState, { [action.artist.id]: action.artist })
        case REMOVE_ARTIST:
            let newState = merge({}, oldState)
            delete newState[action.artistId]
            return newState
        default:
            return oldState
    }
};

export default artistsReducer;