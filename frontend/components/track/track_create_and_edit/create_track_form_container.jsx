import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TrackForm from './track_form';
import { createTrack } from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
    const track = { title: '', lyrics: '' };
    const formType = 'Add Track';

    return { track, formType };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: (track) => dispatch(createTrack(track)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
