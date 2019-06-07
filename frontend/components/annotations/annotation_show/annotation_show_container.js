// import React from 'react';
// import { connect } from 'react-redux';
// import TrackIndex from './track_index';
// import { fetchTracks } from '../../../actions/track_actions';

// // // pass down current user from state --> (trackindex) component
// const mapStateToProps = (state) => {
//     // debugger
//     // to look at state
//     return {
//         tracks: Object.values(state.entities.tracks)
//     }
// }

// // // pass down fetchtracks action from track_actions --> component
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchTracks: () => dispatch(fetchTracks())
//     }   //remember syntax
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);