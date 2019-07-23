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
                <div className="comment-show-container">
                    <h3 className="comment-show-commenter">{commenter}</h3>
                    <h3>{comment.comment_body}</h3>

                    <button onClick={() => {
                        this.props.deleteComment(comment.id);
                    }}
                        className="create-annotation-and-comment-button"
                    >Delete Comment</button>
                </div>
            </>
        )
    }
}

export default CommentShow;