import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateTrackForm from './create_track_form';
import { createTrack } from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
    const track = { title: '', lyrics: '' };
    const formType = 'Add Track';
    const currentUserId = state.session.id;

    return { track, formType, currentUserId };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTrack: (track) => dispatch(createTrack(track)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrackForm);
