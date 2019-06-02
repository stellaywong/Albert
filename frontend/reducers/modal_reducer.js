import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (oldState = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:    // set our modal slice to a string
            return action.modal;
        case CLOSE_MODAL:   // reset our modal slice to be null
            return null;
        default:            // return oldState if none of these actions are hit
            return oldState;
    }
}

export default modalReducer;