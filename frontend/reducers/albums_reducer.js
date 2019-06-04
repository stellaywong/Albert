import { RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM } from '../actions/album_actions';
// import { RECEIVE_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';

import { merge } from 'lodash';

const albumsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALBUMS:
            return merge({}, oldState, action.albums)
        // case RECEIVE_TRACKS:                        //for tracks, not album
        //     return merge({}, oldState, action.albums)
        case RECEIVE_ALBUM:
            return merge({}, oldState, { [action.album.id]: action.album })
        // case RECEIVE_TRACK:                     //for tracks, not album
        //     return merge({}, oldState, { [action.album.id]: action.album })
        case REMOVE_ALBUM:
            let newState = merge({}, oldState)
            delete newState[action.albumId]
            return newState
        default:
            return oldState
    }
};

export default albumsReducer;