//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

import * as SessionApiUtil from './util/session_api_util';
import * as TrackApiUtil from './util/track_api_util';


window.PostUser = SessionApiUtil.postUser;
window.TrackApiUtil = TrackApiUtil; //on the window
//chrome console
//test TrackApiUtil.fetchTracks(), go to responseJSON (to see the object)

// debugger
document.addEventListener('DOMContentLoaded', () => {

    let store;                                          // we don't put the store directly on the window because
    // it can be confusing when debugging, sometimes giving you access to state when you shouldn't
    // debugger
    if (window.currentUser) {                           // if in application.html is a valid javascript object,
    // debugger
        const preloadedState = {                        // then we want that object to become the current user in our preloaded state. mimics the shape of our current reducer
            session: { id: window.currentUser.id },     // session reducer
            entities: {
                users: { [window.currentUser.id]: window.currentUser }  // current user becomes a javascript object with an id, username, email
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});