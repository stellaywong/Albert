import React from 'react';
import { Link } from 'react-router-dom';

const TrackIndexItem = ({ track, idx }) => {
    // debugger
    return (
        // {/* How to make these accessible? Have tried 1) div not label 2) placing outside of Link jsx object and adding <>, </> outside*/}
        <Link to={`/tracks/${track.id}`} className="top-tracks-index-item">
            <label className="screenreader-only">Featured Poem Number {idx + 1}</label>
            <span className="top-tracks-numbering">{idx+1}</span>

            <label className="screenreader-only">Poem Cover Image</label>
            <img src={track.photoUrl} alt="" className="top-tracks-index-item-image" />

            <div className="top-tracks-index-item-text">
                <label className="screenreader-only">Poem Title: {track.title}</label>
                <h3 className="top-tracks-index-item-title">{track.title}</h3>
            </div>
            
            <label className="screenreader-only">Poet: {track.artist_name}</label>
            <h4 className="top-tracks-index-item-artist">{track.artist_name}</h4>
        </Link>
            // {/* // <button onClick={() => deletetrack(track.id)}>Delete</button> */}
        );
};

export default TrackIndexItem;

// don't need withRouter bc everything is coming from TrackIndex