import React from 'react';
import { Link } from 'react-router-dom';

class CommentShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comment, commenter } = this.props;

        return (
            <>
                <h3>{commenter}</h3>
                <h3>{comment.comment_body}</h3>

                <button onClick={() => {
                    this.props.deleteComment(comment.id);
                }}
                >Delete Comment</button>
            </>
        )
    }
}

export default CommentShow;