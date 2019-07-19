import React from 'react';
import { Link } from 'react-router-dom';


const myDebounce = (interval) => {
    let timeout;
    
    return (argument) => {
        const functionCall = () => {
            timeout = null;
            // this.props.fetchSearchResults(argument)
            console.log(argument);
        }

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, interval);
    }
}

// if you're a fast typer, send a search to the backend if there's a 1-second pause
const delayedSearch = myDebounce(250);


const handleChange = (e) => {
    let search = e.target.value;

    delayedSearch(search);
}



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
            <input
                placeholder="Search poems and more"
                onChange={handleChange}
            ></input>
            <a href="https://rhymestein.herokuapp.com" className="header_website">R H Y M E S T E I N</a>
            {/* <a href="http://localhost:3000/#/" className="header_website">R H Y M E S T E I N</a> */}
            {/* <h1></h1> */}
            <div>
                { display }
            </div>
        </header>
    );
}

export default Header;

