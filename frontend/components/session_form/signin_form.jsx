// form that allows us to create new user from frontend.
// create this.props.createNewUser. when we pass in a JSON object, it creates a new user for us.

import React from 'react';
import { withRouter } from 'react-router-dom';

class SigninForm extends React.Component {
    // all the fields for the form we're building
    constructor(props) {
        super(props);
        this.state = {                                          // POJO
            username: '',                                       // fields for these are defaulted to empty string
            email: '',
            password: '',
            errors: [],
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
        this.props.signin(this.state)                    // this.state is an object with username, email, password
            // .then(() => this.props.history.push('/tracks'));    // if we successfully create new user, do this
            .then(
                () => this.props.closeModal(),
                errors => {
                    // debugger
                    let errorArray = errors.responseJSON;           // responseJSON is the array of errors      // errors.error.responseJSON looks like: errors { error { responseJSON ["Username can't be blank", "Email can't be blank", "Password is too short (minimum is 6 characters)"]}}
                    errorArray = this.sortErrors(errorArray);       // custom switch-case method (THIS is the component) to sort errors
                    this.setState({ errors: errorArray });            // case a re-render (so message shows up)
                }
            );
    }               // we don't have access to history yet but we will bc we wrap this whole component inside a route

    sortErrors(array) {
        const answer = new Array(1);        // a new array class with 3 parts
        // debugger 
        array.forEach((error) => {
            switch (error) {
                case "Invalid username or password":
                    answer[0] = error;
                    break;
            }
        })
        return answer;
    }

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
        // debugger
        const inputs = (this.state.errors.length) ? (
            <>
                <a onClick={() => this.signinDemo()} className="demo-user-button">Demo User Sign In</a>
                <label className="screenreader-only">Username</label>
                <label className="signup-and-signin-input-label">Rhymestein Login</label>


                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleInput("username")}
                    placeholder="Username"
                    className={`signup-and-signin-form-field ${this.state.errors[0] ? ("error-text-input-field") : ("")}`}

                />
                {/* // if the array has an error message at that index, the error shoudl show up under this specific input field */}
                {this.state.errors[0] ? (<div className="error-text-message">{this.state.errors[0]}</div>) : (<></>)}

                <label className="screenreader-only">Email</label>
                <label className="signup-and-signin-input-label">Email</label>
                <input
                    type="email"
                    value={this.state.email}
                    onChange={this.handleInput("email")}
                    placeholder="Email"
                    className={`signup-and-signin-form-field ${this.state.errors[0] ? ("error-text-input-field") : ("")}`}

                />
                {this.state.errors[1] ? (<div className="error-text-message">{this.state.errors[0]}</div>) : (<></>)}

                <label className="screenreader-only">Password</label>
                <label className="signup-and-signin-input-label">Password</label>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInput("password")}
                    placeholder="Password"
                    className={`signup-and-signin-form-field ${this.state.errors[0] ? ("error-text-input-field") : ("")}`}
                />
                {this.state.errors[2] ? (<div className="error-text-message">{this.state.errors[0]}</div>) : (<></>)}

                <br></br>
                <input type="submit" value="Sign In" className="submit-form-button" />
            </>
        ) : (
                <>
                    <a onClick={() => this.signinDemo()} className="demo-user-button">Demo User Sign In</a>

                    <label className="screenreader-only">Username</label>
                    <label className="signup-and-signin-input-label">Rhymestein Login</label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                        placeholder="Username"
                        className="signup-and-signin-form-field"
                    />
                    <label className="screenreader-only">Email</label>
                    <label className="signup-and-signin-input-label">Email</label>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                        placeholder="Email"
                        className="signup-and-signin-form-field"
                    />
                    <label className="screenreader-only">Password</label>
                    <label className="signup-and-signin-input-label">Password</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        placeholder="Password"
                        className="signup-and-signin-form-field"
                    />
                    <br></br>
                    <input type="submit" value="Sign In" className="submit-form-button" />
                </>
            )

        return (
            <div className="signup_and_signin_form_whole_container">
                <h3 className="signup-and-signin-form-header">Sign In</h3>

                <div className="signup-and-signin-form-fields-container">
                    <form onSubmit={this.handleSubmit}>
                        {inputs}
                        {/* be careful and remember inputs are self-closing */}
                    </form>
                    {/* To get to the other modal */}
                    <button onClick={() => {
                        this.props.closeModal();
                        this.props.signup();
                    }}>Don't have an account? Sign up here.</button>



                </div>
            </div>
        )
    }
}

export default withRouter(SigninForm);

// create user
// which automatically logs them in

// post to the users controller and it'll log in
// use postUser
// use signin