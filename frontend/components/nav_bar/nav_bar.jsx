import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const { currentUser } = props; //destructure props here

    const logged_in_add_track_button = currentUser ? <Link to="/create" className="nav-bar-button">ADD POEM</Link> : null

    return (
        <div className="nav-bar">
            {/* this must be changed later to accomodate the hash */}
            <Link to="/" className="nav-bar-button">FEATURED</Link> 
            {logged_in_add_track_button}          
        </div>

    );
}

export default NavBar;

