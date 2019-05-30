import React from 'react';
import { connect } from 'react-redux';
import Header from './header_bar';
import { logout } from '../../actions/session_actions'
// we import the logout action, which makes a button that allows the user to logout

// pass down current user from state --> (navbar) component
const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

// pass down logout action from session_actions --> component
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);