import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';


// import SignupFormContainer from './session_form/signup_form_container';
// import SigninFormContainer from './session_form/signin_form_container';

import Header from './header/header_container';
import Modal from './modal/modal';
import NavBar from './nav_bar/nav_bar_container';
import TrackShowContainer from './track/track_show/track_show_container';
import TrackIndexContainer from './track/track_index/track_index_container';
import CreateTrackFormContainer from './track/track_create_and_edit/create_track_form_container';
import EditTrackFormContainer from './track/track_create_and_edit/edit_track_form_container';

const App = () => (
    <div>
        <header>
            <Modal />
            <Header></Header>
        </header>
            <NavBar />
            
        {/* <div>
            <p>This is the body</p>
        </div> */}

        {/* you need to import Switch from react-router-dom! */}
        <Switch>
            <Route exact path="/" component={TrackIndexContainer}></Route>
            <ProtectedRoute exact path="/create" component={CreateTrackFormContainer}></ProtectedRoute>
            {/* if exact path is /tracks/create, the router will hit tracks/:trackId first, thinking "create" is a wildcard. Therefore, put tracks/create before track/(any route that requires a wildcard) */}
            <ProtectedRoute exact path="/tracks/:trackId/edit" component={EditTrackFormContainer}></ProtectedRoute>
            <Route exact path="/tracks/:trackId" component={TrackShowContainer}></Route>

            {/* you need a colon in front of the wildcard, otherwise it will look for literally /tracks/trackId instead of /tracks/3 */}
        </Switch>

        <footer className='footer-wrapper'>
            <div className="footer-bar">
                <a href="https://github.com/stellaywong/Albert" className="footer-bar-button">GITHUB <i className="fab fa-github"></i></a>
                <a href="https://linkedin.com/stella-y-wong" className="footer-bar-button">LINKEDIN <i className="fab fa-linkedin"></i></a>
                {/* because we put the image into React, change FontAwesome's link's "class" to "classname" */}
            </div>
        </footer>
        {/* <div className="bottom-footer-bar"></div> */}
    </div>
);

export default App;