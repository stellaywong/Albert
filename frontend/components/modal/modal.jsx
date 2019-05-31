import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SigninFormContainer from '../session_form/signin_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

// we are exporting a connected version of our Modal component 
// so that we can have access to our modal slice of state 
// and the ability to dispatch the closeModal action.

function Modal({ modal, closeModal }) {
    // debugger
    // for modal functionality
    if (!modal) {           // if our modal slice is null, 
        return null;        // we'll return null from our component, 
    }                       // effectively making it non-existent

    let component;                  // Otherwise, we have a switch statement which will 
    switch (modal) {                // choose what component we put inside of our.modal - child div 
        case 'signup':              // which is inside of our.modal - background div
            component = <SignupFormContainer />;
            break;
        case 'signin':
            component = <SigninFormContainer />;
            break;
        default:
            return null;
    }

        return (
        <div className="modal-background" onClick={closeModal}>         
        {/* // the onClick of our .modal-background is the closeModal prop 
        that will send an action to our store to set our modal slice to null  */}

            <div className="modal-child" onClick={e => e.stopPropagation()}>
            {/* the onClick of our .modal-child is a callback that will 
            stop the propagation of the click event */}
                { component }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);