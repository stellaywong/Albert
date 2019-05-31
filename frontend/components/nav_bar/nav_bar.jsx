import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const { currentUser } = props; //destructure props here

    return (
        <div className="nav-bar">
            <p className="nav-bar-button">TOP SONGS</p>
            <p className="nav-bar-button">VIDEOS</p>
            {/* this must be changed later to accomodate the hash */}
            

        </div>

    );
}

export default NavBar;

