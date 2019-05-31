import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';
import SigninFormContainer from './session_form/signin_form_container';

import Header from './header/header_container';
import Modal from './modal/modal';
import NavBar from './nav_bar/nav_bar_container';
import Track from './track/track_container';


const App = () => (
    <div>
        {/* <Route path="" component={Header}></Route> */}
        <header>
            <Modal />
            <Header></Header>
        </header>
            <NavBar />

        {/* to move between other pages */}
        <div>
            <h1>This is the body</h1>
            <Track></Track>
            {/* <AuthRoute path="/signup_form_container" component={SignupFormContainer}></AuthRoute>
            <AuthRoute path="/signin_form_container" component={SigninFormContainer}></AuthRoute> */}
        </div>
        <footer className='footer-wrapper'>
            <div className="footer-bar">
                <a href="https://github.com/stellaywong/Albert" className="footer-bar-button">GITHUB</a>
            </div>
        </footer>
    </div>
);

export default App;