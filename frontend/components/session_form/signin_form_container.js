import { connect } from 'react-redux';
import React from 'react';

import { signin } from '../../actions/session_actions';
import Signin from './signin_form';

import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signin: (user) => dispatch(signin(user)),

        signup: () => dispatch(openModal('signup')),    //must be a string
        
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
