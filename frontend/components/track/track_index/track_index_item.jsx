import React from 'react';
import { Link } from 'react-router-dom';

const TrackIndexItem = ({ track }) => {
    // debugger
    return (
        <li>
            <Link to={`/tracks/${track.id}`}>
                {track.title}
            </Link>

            {/* <button onClick={() => deletetrack(track.id)}>Delete</button> */}
        </li>);
};

export default TrackIndexItem;

// don't need withRouter bc everything is coming from TrackIndex