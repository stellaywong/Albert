import React from 'react';
import { connect } from 'react-redux';
import EditTrackForm from './edit_track_form';
import { fetchTrack, updateTrack } from '../../../actions/track_actions';
import { retrieveAlbums } from '../../../actions/album_actions';
import { retrieveArtists } from '../../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
    const defaultTrack = { title: '', lyrics: '' };
    const track = state.entities.tracks[ownProps.match.params.trackId] || defaultTrack;
    const formType = 'Update Track';
    const currentUserId = state.session.id;         //bootstrap this to session
    // debugger
    // p add_track_debugger
    
    const album = Object.values(state.entities.album[track.album_id]).length > 0 ? Object.values(state.entities.album[track.album_id]) : null;
    const artist = Object.values(state.entities.artist[track.artist_id]).length > 0 ? Object.values(state.entities.artist[track.artist_id]) : null;

    return { track, formType, currentUserId, album, artist};
};

// the first time through, nothing exists in state and can't be keyed into, ergo MDP is necessary
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrack: (id) => dispatch(fetchTrack(id)),
        updateTrack: (track) => dispatch(updateTrack(track)),
        retrieveAlbums: () => dispatch(retrieveAlbums()),
        retrieveArtists: () => dispatch(retrieveArtists()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackForm);
