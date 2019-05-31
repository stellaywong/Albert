import React from 'react';
import { connect } from 'react-redux';
import Track from './track';

// // pass down current user from state --> (navbar) component
const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

// // pass down logout action from session_actions --> component
const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Track);