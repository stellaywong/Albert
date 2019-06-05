import React from 'react';
import { Link } from 'react-router-dom';

const TrackIndexItem = ({ track, idx }) => {
    // debugger
    return (
        <Link to={`/tracks/${track.id}`} className="top-tracks-index-item">
            <span className="top-tracks-numbering">{idx+1}</span>
            <img src={track.photoUrl} alt="" className="top-tracks-index-item-image" />
            <div className="top-tracks-index-item-text">
                <h3 className="top-tracks-index-item-title">{track.title}</h3>
            </div>
                <h4 className="top-tracks-index-item-artist">{track.artist_name}</h4>
        </Link>
            // {/* <button onClick={() => deletetrack(track.id)}>Delete</button> */}
        );
};

export default TrackIndexItem;

// don't need withRouter bc everything is coming from TrackIndex