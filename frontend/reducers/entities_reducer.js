import { combineReducers } from 'redux';

import usersReducer from './users_reducer'; // from the same reducers folder
import tracksReducer from './tracks_reducer'; //
import albumsReducer from './albums_reducer'; //
import artistsReducer from './artists_reducer'; //

const entitiesReducer = combineReducers({
    users: usersReducer,                     // a single key-value pair for now named users which points to the usersReducer
    tracks: tracksReducer,
    albums: albumsReducer,
    artists: artistsReducer,
});

export default entitiesReducer;