import React from 'react';
import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTrack } from '../../../actions/track_actions';
import { fetchArtist } from '../../../actions/artist_actions';
import { fetchAlbum } from '../../../actions/album_actions';

// // pass down current user from state --> (trackshow) component
// const mapStateToProps = (state, ownProps) => ({
//     track: state.entities.tracks[ownProps.match.params.trackId]
// });

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        track: state.entities.tracks[ownProps.match.params.trackId],
        //to access these words
        artist: state.entities.artists[ownProps.match.params.artistId],
        album: state.entities.albums[ownProps.match.params.albumId],
    }
}

// // pass down logout action from session_actions --> component
const mapDispatchToProps = (dispatch) => ({
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);