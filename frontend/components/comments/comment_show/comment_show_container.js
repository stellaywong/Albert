import React from 'react';
import {connect} from 'react-redux';
import {deleteComment} from '../../../actions/comment_actions';
import { upvoteComment, downvoteComment } from '../../../actions/vote_actions';

import CommentShow from './comment_show';

// const mapStateToProps = (state) => {
//     return {
//         currentUserId: state.session.id,
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (id) => dispatch(deleteComment(id)),
        upvoteComment: (id) => dispatch(upvoteComment(id)),
        downvoteComment: (id) => dispatch(downvoteComment(id))
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(CommentShow);
export default connect(null, mapDispatchToProps)(CommentShow);