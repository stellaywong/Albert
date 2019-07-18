import { connect } from 'react-redux';
import CreateCommentForm from './create_comment_form';
import { createComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {      // why do we have ownProps here?
    const comment = { comment_body: ''};
    const formType = 'Add Comment';
    const currentUserId = state.session.id;

    return { comment, formType, currentUserId };
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (comment) => dispatch(createComment(comment)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm);