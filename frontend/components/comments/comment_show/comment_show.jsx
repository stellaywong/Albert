import React from 'react';
import { Link } from 'react-router-dom';

class CommentShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comment, commenter } = this.props;
        
        let voteColor = { "color": "gray" };
        if (comment.votes > 0) {
            voteColor = { "color": "#0ECB27" };
        } else if (comment.votes < 0) {
            voteColor = { "color": "red" };
        }

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

                    <div className='vote-buttons'>
                        <div className="screenreader-only">Upvote Comment</div>
                        <button onClick={() => this.props.upvoteComment(comment.id)} className="upvote"><i class="fas fa-thumbs-up"></i></button>
                        <span style={voteColor} >{comment.votes}</span>
                        {/* you need a tag to style this, but it must always point to an object of two-pairs */}
                        {/* you can do the styling in-line, so the css is contained in this ternary */}
                        {/* or if you have a default value (gray color) you can save it to above the return and call the styling as a variable */}
                        <div className="screenreader-only">Downvote Comment</div>
                        <button onClick={() => this.props.downvoteComment(comment.id)} className="downvote"><i class="fas fa-thumbs-down"></i></button>
                    </div>
                </div>
            </>
        )
    }
}

export default CommentShow;