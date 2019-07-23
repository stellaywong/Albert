import React from 'react';
import {connect} from 'react-redux';
import {deleteAnnotation} from '../../../actions/annotation_actions';
import { upvoteAnnotation, downvoteAnnotation } from '../../../actions/vote_actions';
import AnnotationShow from './annotation_show';

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.id,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAnnotation: (id) => dispatch(deleteAnnotation(id)),
        upvoteAnnotation: (id) => dispatch(upvoteAnnotation(id)),
        downvoteAnnotation: (id) => dispatch(downvoteAnnotation(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationShow);
