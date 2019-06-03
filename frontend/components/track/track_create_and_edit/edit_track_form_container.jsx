import React from 'react';
import { connect } from 'react-redux';
import TrackForm from './track_form';
import { fetchTrack, updateTrack } from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
    const defaultTrack = { title: '', lyrics: '' };
    const track = state.entities.tracks[ownProps.match.params.trackId] || defaultTrack;
    const formType = 'Update Track';
    const currentUserId = state.session.id;         //bootstrap this to session

    // debugger
    return { track, formType, currentUserId};
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrack: (id) => dispatch(fetchTrack(id)),
        action: (track) => dispatch(updateTrack(track)),
    };
};

class EditTrackForm extends React.Component {
    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId);
    }

    //  if you're on the trackshow page of track with an id of 3 and 
    //  you manually change the url to the track of id = 5, your app refetches the track. 
    //  Without the componentDidUpdate, your code will not refetch the track's info because 
    //  your app will not know the user is trying to access a new track
    componentDidUpdate(prevProps) {
        if (prevProps.track.id != this.props.match.params.trackId) {
            this.props.fetchTrack(this.props.match.params.trackId);
        }
    }

    render() {
        const { action, formType, track } = this.props;
        return (
            <TrackForm
                action={action}
                formType={formType}
                track={track} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackForm);
