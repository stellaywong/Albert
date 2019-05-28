//container for form. //form that allows us to create new user from frontend.
// containers don't need the jsx because we're not exporting.

import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

// our signup component doesn't rely on any part of our state so we just want to pass down the action it needs to sign up user
const mdp = (dispatch) => ({    //POJO
    createNewUser: formUser => dispatch(createNewUser(formUser))   //createnewUser we imported //formUser from form
})
//createNewUser in a props in our signup

export default connect(null, mdp)(Signup);
//null bc we don't rely on any parts of state