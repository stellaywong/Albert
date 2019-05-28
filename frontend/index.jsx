//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
// import Root from './components/root';
// import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = undefined;                // makes sure we have a variable we can use. 
    if (window.currentUser) {                      // if in application.html is a valid javascript object, 
        preloadedState = {                         // then we want that object to become the current user in our preloaded state. mimics the shape of our current reducer
            session: {                             // session reducer
                currentUser: window.currentUser    // current user becomes a javascript object with an id, username, email
            }
        };
        store = createStore(preloadedState);
    }
    else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store} />, document.getElementById('root'));
})