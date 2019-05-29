// 0. root is a functional component
// 1. root takes a store as a prop, pass it into 
// 2. child component (provider) that will take store as a prop too
// 3. provider component renders THE app component 

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        {/* this way, app will be rendered for all app's routes */}
        <HashRouter>                
            <App />
        </HashRouter>
    </Provider>
);

export default Root;
