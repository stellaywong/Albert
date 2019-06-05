import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const { currentUser } = props; //destructure props here

    return (
        <div className="nav-bar">
            {/* this must be changed later to accomodate the hash */}
            <Link to="/" className="nav-bar-button">FEATURED</Link>

            <Link to="/create" className="nav-bar-button">ADD POEM</Link>
        </div>

    );
}

export default NavBar;

