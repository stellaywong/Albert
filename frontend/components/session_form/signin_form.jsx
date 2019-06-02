// form that allows us to create new user from frontend.
// create this.props.createNewUser. when we pass in a JSON object, it creates a new user for us.

import React from 'react';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

class SigninForm extends React.Component {
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
        this.signinDemo = this.signinDemo.bind(this);
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
        this.props.signin(this.state)                    // this.state is an object with username, email, password
        // .then(() => this.props.history.push('/tracks'));    // if we successfully create new user, do this
            .then(() => this.props.closeModal());
    }               // we don't have access to history yet but we will bc we wrap this whole component inside a route

    signinDemo(e) {
        const demoUser = {
            username: 'DemoUser',
            email: 'demouser@gmail.com',
            password: 'password123'
        }
        this.props.signin(demoUser)
            .then(() => this.props.closeModal());
    }

    render() {
        return (
            <div className="signin_form_container">
                {/* <a name="#hello">Hello</a> */}
                <h3 className="signup_and_signin_label">Sign in to Rhymestein</h3>
                <form onSubmit={this.handleSubmit}>
                    <label className="screenreader-only">Username</label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                        placeholder="Username"
                        className="signup_and_signin_input_field"
                        required
                    />
                    <label className="screenreader-only">Email</label>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                        placeholder="Email"
                        className="signup_and_signin_input_field"
                        required
                    />
                    <label className="screenreader-only">Password</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        placeholder="Password"
                        className="signup_and_signin_input_field"
                        required
                    />
                    <input type="submit" value="Sign In" className="submit_button"/>
                </form>
                <a onClick={() => this.signinDemo()}>Demo User Sign In</a>
            </div>
        )
    }
}

export default withRouter(SigninForm);

// use postSession
// use signin