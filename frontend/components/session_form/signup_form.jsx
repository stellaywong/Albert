// form that allows us to create new user from frontend.
// create this.props.createNewUser. when we pass in a JSON object, it creates a new user for us.

import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    // all the fields for the form we're building
    constructor(props) {
        super(props);
        this.state = {                                          // POJO
            username: '',                                       // fields for these are defaulted to empty string
            email: '',
            password: '',
        }

        //* the problem is handleSubmit isn't bound to current scope of the function. so we bind it here
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // the handle methods will help to make the form work
    // before we build the form, we build the actions the form will use
    handleInput(type) {                                         // pass in a javascript object here: any keys that don't match our state will get updated (pass in email, username etc.)
        return (e) => {                                         // return arrow function that sets the state for us
            this.setState({ [type]: e.target.value })           // square brackets: it will be evaluated before it's set to the key.
        }
    }

    // method that handles submitting the info of our state to the backend
    handleSubmit(e) {                                           // takes in event
        e.preventDefault();                                     // prevent default action that refreshes the page
        this.props.signup(this.state)                    // this.state is an object with username, email, password
            // .then(() => this.props.history.push('/tracks'));    // if we successfully create new user, do this
            .then(() => this.props.closeModal());
    }               // we don't have access to history yet but we will bc we wrap this whole component inside a route

    render() {
        return (
            <div className="signup_and_signin_form_whole_container">
                <h3 className="signup-and-signin-form-header">Sign Up</h3>

                <div className="signup-and-signin-form-fields-container">
                        <form onSubmit={this.handleSubmit}>
                            <label className="screenreader-only">Username</label>
                            <label className="signup-and-signin-input-label">Rhymestein Nickname</label>
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                                placeholder="Username"
                                className="signup-and-signin-form-field"
                                required
                            />
                            <label className="screenreader-only">Email</label>
                            <label className="signup-and-signin-input-label">Email</label>
                            <input
                                type="email"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                placeholder="Email"
                                className="signup-and-signin-form-field"
                                required
                            />
                            <label className="screenreader-only">Password</label>
                            <label className="signup-and-signin-input-label">Password</label>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                placeholder="Password"
                                className="signup-and-signin-form-field"
                                required
                            />
                            <br></br>
                            <input type="submit" value="Sign Up" className="submit-form-button"/>
                            {/* be careful and remember inputs are self-closing */}
                        </form>
                </div>
            </div>
        )
    }
}

export default withRouter(SignupForm);

// create user
// which automatically logs them in

// post to teh users controller and it'll log in
// use postUser
// use signup