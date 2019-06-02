import React from 'react';
import { connect } from 'react-redux';
import TrackForm from './track_form';
import { fetchTrack, updateTrack } from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
    const defaultTrack = { title: '', lyrics: '' };
    const track = state.entities.tracks[ownProps.match.params.trackId] || defaultTrack;
    const formType = 'Update Track';

    return { track, formType };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrack: (id) => dispatch(fetchTrack(id)),
        updateTrack: (track) => dispatch(updateTrack(track)),
    };
};

class EditTrackForm extends React.Component {
    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.track.id != this.props.match.params.trackId) {
    //         this.props.fetchTrack(this.props.match.params.trackId);
    //     }
    // }

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
