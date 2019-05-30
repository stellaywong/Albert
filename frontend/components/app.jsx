import React from 'react';
import { AuthRoute } from '../util/route_util';

import SignupFormContainer from './session_form/signup_form_container';
import SigninFormContainer from './session_form/signin_form_container';

import Header from './header/header_container';

const App = () => (
    <div>
        <header>
            <Header></Header>
        </header>
        <div>
            <AuthRoute path="/signup_form_container" component={SignupFormContainer}></AuthRoute>
            <AuthRoute path="/signin_form_container" component={SigninFormContainer}></AuthRoute>
        </div>
    </div>
);

export default App;