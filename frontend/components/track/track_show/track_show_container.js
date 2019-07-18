import React from 'react';
import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTrack } from '../../../actions/track_actions';    //this gets the annotations for us
import { fetchArtist } from '../../../actions/artist_actions';
import { fetchAlbum } from '../../../actions/album_actions';
import { fetchAnnotations, deleteAnnotation } from '../../../actions/annotation_actions';

// quicksort method placed here
Array.prototype.quickSort = function (comparator) {
    if (this.length <= 1) {
        return this;
    };

    if (typeof comparator !== "function") {
        comparator = (x, y) => {
            if (x === y) {
                return 0;
            } else if (x < y) {
                return -1;
            } else {
                return 1;
            }
        }
    }

    const pivot = this[0];
    const smallArr = [];
    const bigArr = [];

    for (let i = 1; i < this.length; i++) {
        if (comparator(this[i].start_index, pivot.start_index) === -1) {
            smallArr.push(this[i]);
        } else {
            bigArr.push(this[i]);
        }
    }

    return smallArr.quickSort(comparator).concat([pivot]).concat(bigArr.quickSort(comparator));
}


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
        // debugger
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

    // console.log(Object.values(state.entities.annotations).length);
    // console.log('HERE:', annotators);

    let annotationsForOneTrack = [];
    let annotations_array = Object.values(state.entities.annotations);  //an array

    // do one first loop-through and check which indices need a special format
    // pulling all annotations for this particular page
    // debugger
    annotations_array.map((annotation) => {
        if (annotation.track_id === track.id) {
            annotationsForOneTrack.push(annotation);
        }
        return annotationsForOneTrack;
    })

    // quick-sorting through this page's annotations in start_index order
    // bootstrapped onto the array class so added it permanently as long as the component exists
    // we want to change annotationsForOneTrack 
    
    annotationsForOneTrack = annotationsForOneTrack.quickSort();
    console.log(annotationsForOneTrack);

    return {
        currentUser: state.entities.users[state.session.id],    //to make edit track conditional

        track: track,
        artist: state.entities.artists[artistId],
        album: state.entities.albums[albumId],
        annotations_array: annotationsForOneTrack,
        annotators: annotators,
    }
}

// // pass down logout action from session_actions --> component
const mapDispatchToProps = (dispatch) => ({
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    fetchAnnotations: (trackId) => dispatch(fetchAnnotations(trackId)),
    deleteAnnotation: (id) => dispatch(deleteAnnotation(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);