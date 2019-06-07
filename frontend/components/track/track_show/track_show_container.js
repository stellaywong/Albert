import React from 'react';
import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTrack } from '../../../actions/track_actions';    //this gets the annotations for us
import { fetchArtist } from '../../../actions/artist_actions';
import { fetchAlbum } from '../../../actions/album_actions';

// // pass down current user from state --> (trackshow) component
// const mapStateToProps = (state, ownProps) => ({
//     track: state.entities.tracks[ownProps.match.params.trackId]
// });

const mapStateToProps = (state, ownProps) => {
    debugger

    let albumId = null
    let artistId = null

    //on first render, if track doesn't exist yet
    const track = state.entities.tracks[ownProps.match.params.trackId]
    if (track) {
        albumId = track.album_id
        artistId = track.artist_id
    };
    // else defaults to null

    return {
        currentUser: state.entities.users[state.session.id],    //to make edit track conditional
        // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE 

        track: track,
        artist: state.entities.artists[artistId],
        album: state.entities.albums[albumId],
        annotation: Object.values(state.entities.annotations),  //an array
    }
}

// // pass down logout action from session_actions --> component
const mapDispatchToProps = (dispatch) => ({
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);