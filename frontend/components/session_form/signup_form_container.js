//container for the form that allows us to create new user from frontend.
import { connect } from 'react-redux';                          // containers don't need the jsx because we're not exporting.
import React from 'react';

import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
// import Signin from './signin_form';

import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
})

// our signup component doesn't rely on any part of our state so we just pass down the action needed to sign up user
const mapDispatchToProps = (dispatch) => ({                                        // POJO
    signup: (user) => dispatch(signup(user)),    // we imported createnewUser // the formUser comes from form

    closeModal: () => dispatch(closeModal()),

    otherForm: (
        <button onClick={() => dispatch(openModal('signin'))}>Signin</button>
    ),
})
//createNewUser in a props in our signup

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);