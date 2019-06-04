// custom routes to conditionally render either the component or a <Redirect> based on whether a user is logged in.
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import React from 'react';

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

const Auth = ({ component: Component, path, signin, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !signin ? (
            <Component {...props} />        //all props coming in from app.jsx
        ) : (
                <Redirect to="/" />
            )
    )} />
);


const Protected = ({ component: Component, path, logged_in }) => (
    <Route 
        path={path}
        render= {(props) => (
            logged_in ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/signin" />
                )
    )} />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));