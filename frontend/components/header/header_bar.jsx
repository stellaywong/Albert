import React from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchResults, clearSearchResults } from '../../actions/search_actions';
import SearchBarAndResults from './search_results';
import { connect } from 'react-redux';

const Header = (props) => {
    const {currentUser, logout} = props; //destructure props here

{/* display has two buttons: sign up and log in */ }
{/* but we only want to show these two buttons if they're not logged in */ }
    // debugger
    let display = currentUser ? (
        <div className="header_right_side">
            <p className="welcome_message">Welcome, {currentUser.username}</p>  
            <button onClick={logout} className="session_buttons">SIGN OUT</button>
        </div>
     ) : 
    (
        <div className="session_buttons_holder">
            {/* <Link className="session_buttons" to="/signup_form_container">SIGN UP</Link>
            <Link className="session_buttons" to="/signin_form_container">SIGN IN</Link> */}
            <button onClick={props.signup} className="session_buttons">Sign Up</button>
            <button onClick={props.signin} className="session_buttons">Sign In</button>
        </div>
    );
// debugger
// for modal functionality
    return (
        <header className="header_bar">
            <SearchBarAndResults />

            <a href="https://rhymestein.herokuapp.com" className="header_website">R H Y M E S T E I N</a>
            {/* <a href="http://localhost:3000/#/" className="header_website">R H Y M E S T E I N</a> */}
            {/* <h1></h1> */}
            <div>
                { display }
            </div>
        </header>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearchResults: (input) => dispatch(fetchSearchResults(input)),
        clearSearchResults: () => dispatch(clearSearchResults()),
    }
}

export default connect(null, mapDispatchToProps)(Header);

