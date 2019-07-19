import React from 'react';
import {connect} from 'react-redux';
import {deleteComment} from '../../../actions/comment_actions';
import CommentShow from './comment_show';

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (id) => dispatch(deleteComment(id)),
    }
}

export default connect(null, mapDispatchToProps)(CommentShow);