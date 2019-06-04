import React from 'react';
import { connect } from 'react-redux';
import EditTrackForm from './edit_track_form';
import { fetchTrack, updateTrack } from '../../../actions/track_actions';
import { fetchAlbums } from '../../../actions/album_actions';
import { fetchArtists } from '../../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
    const defaultTrack = { title: '', lyrics: '' };
    const track = state.entities.tracks[ownProps.match.params.trackId] || defaultTrack;
    const formType = 'Update Track';
    const currentUserId = state.session.id;         //bootstrap this to session
    // p add_track_debugger
    
    const album = state.entities.albums[track.album_id] ? Object.values(state.entities.albums[track.album_id]) : null;
    const artist = state.entities.artists[track.artist_id] ? Object.values(state.entities.artists[track.artist_id]) : null;

    return { track, formType, currentUserId, album, artist};
};

// the first time through, nothing exists in state and can't be keyed into, ergo MDP is necessary
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrack: (id) => dispatch(fetchTrack(id)),
        updateTrack: (track) => dispatch(updateTrack(track)),
        fetchAlbums: () => dispatch(fetchAlbums()),
        fetchArtists: () => dispatch(fetchArtists()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackForm);
