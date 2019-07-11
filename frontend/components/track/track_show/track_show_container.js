import React from 'react';
import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTrack } from '../../../actions/track_actions';    //this gets the annotations for us
import { fetchArtist } from '../../../actions/artist_actions';
import { fetchAlbum } from '../../../actions/album_actions';
import { fetchAnnotations } from '../../../actions/annotation_actions';

// // pass down current user from state --> (trackshow) component
// const mapStateToProps = (state, ownProps) => ({
//     track: state.entities.tracks[ownProps.match.params.trackId]
// });

const mapStateToProps = (state, ownProps) => {
    // debugger

    let albumId = null;
    let artistId = null;
    let annotators = {};

    //on first render, if track doesn't exist yet
    const track = state.entities.tracks[ownProps.match.params.trackId]
    if (track) {
        albumId = track.album_id;
        artistId = track.artist_id;

        // normal for-loop, increments automatically
        // this fills the annotators object
        // loop through array of annotator ids which lives inside the track
        // using those ids, get the list of annotations
        // for each annotation, set the key-value pair
            // key: annotator id
            // value: annotator's username
        // time complexity: n + m
        // call each element iterated through "annotationId"
        // the array that is iterated through is called "annotation_ids"
        for (let annotationId of track.annotation_ids) {
            let annotation = state.entities.annotations[annotationId];
            
            if (annotation) {
                let annotatorId = annotation.annotator_id;
                annotators[annotatorId] = state.entities.users[annotatorId].username; 
            }
        }
        // because we set this up in annotation show, all we need to do is
        // pass in the annotation id. it will return the username.

        // annotatorId = track.annotation_ids[0];  // the bug right now is that this is hardcoded to the first user in the user's array (as a test)
        // annotator = state.entities.users[annotatorId] ? state.entities.users[annotatorId].username : null;
    };
    // else defaults to null

    return {
        currentUser: state.entities.users[state.session.id],    //to make edit track conditional

        track: track,
        artist: state.entities.artists[artistId],
        album: state.entities.albums[albumId],
        annotations_array: Object.values(state.entities.annotations),  //an array
        annotators
    }
}

// // pass down logout action from session_actions --> component
const mapDispatchToProps = (dispatch) => ({
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    fetchAnnotations: (trackId) => dispatch(fetchAnnotations(trackId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);