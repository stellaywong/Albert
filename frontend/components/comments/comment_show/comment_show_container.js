import React from 'react';
import {connect} from 'react-redux';
import {deleteComment} from '../../../actions/comment_actions';
import { upvoteComment, downvoteComment } from '../../../actions/vote_actions';

import CommentShow from './comment_show';

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (id) => dispatch(deleteComment(id)),
        upvoteComment: (id) => dispatch(upvoteComment(id)),
        downvoteComment: (id) => dispatch(downvoteComment(id))
    }
}

export default connect(null, mapDispatchToProps)(CommentShow);