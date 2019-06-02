import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const { currentUser } = props; //destructure props here

    return (
        <div className="nav-bar">
            {/* this must be changed later to accomodate the hash */}
            <Link to="/" className="nav-bar-button">TOP TRACKS</Link>

            <Link to="/create" className="nav-bar-button">ADD TRACK</Link>

            {/* forthcoming */}
            {/* <p className="nav-bar-button">VIDEOS</p> */}

        </div>

    );
}

export default NavBar;

