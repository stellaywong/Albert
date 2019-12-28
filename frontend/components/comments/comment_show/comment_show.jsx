import React from 'react';
import { Link } from 'react-router-dom';

class CommentShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state (there's no "let" bc it's in React)
        // this.state = {
        //     errors: false,
        // };
        // best practices: bind the context for the class functions in the constructor
        // because most likely, if you're bindin it, it's a method being called asynchronously or called as an event result
        // so any other coder should immediately know that these are two places that are likely to lose context
        // this.signInOrUpvote = this.signInOrUpvote.bind(this);
        // this.signInOrDownvote = this.signInOrDownvote.bind(this);
    }

    // for class functions, they are declared like this: they already know they are part of the class
    // signInOrUpvote(event) {
    //     if (!this.props.currentUserId) {    // currentUserId lives in props -- anything we get from the container is prefaced with "this.props"
    //         this.setState({ errors: true });  // of the three ways to re-render the page (change state, change props, cahnge parent component), we choose state
    //     } else {
    //         this.props.upvoteComment(comment.id);
    //     }
    // }

    // signInOrDownvote(event) {
    //     if (!this.props.currentUserId) {    // currentUserId lives in props -- anything we get from the container is prefaced with "this.props"
    //         this.setState({ errors: true });  // of the three ways to re-render the page (change state, change props, cahnge parent component), we choose state
    //     } else {
    //         this.props.downvoteComment(comment.id);
    //     }
    // }

    // componentDidUpdate(oldProps) {          // componentDidUpdate always gives you the first argument as "oldProps" no matter what
    //     if (oldProps.comment.id !== this.props.comment.id) {
    //         this.setState({ errors: false });
    //     }
    // }
    // you don't need to call componentDidUpdate, or ANY of the lifecycle methods, because they just happen at different times, different parts of the life

    render() {
        const { comment, commenter } = this.props;
        
        let voteColor = { "color": "gray" };
        if (comment.votes > 0) {
            voteColor = { "color": "#0ECB27" };
        } else if (comment.votes < 0) {
            voteColor = { "color": "red" };
        }

        // the return method of any render is super important
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
                        <div className="sr-only">Upvote Comment</div>
                        <button onClick={() => this.props.upvoteComment(comment.id)} className="upvote"><i className="fas fa-thumbs-up"></i></button>
                        <span style={voteColor} >{comment.votes}</span>
                        {/* you need a tag to style this, but it must always point to an object of two-pairs */}
                        {/* you can do the styling in-line, so the css is contained in this ternary */}
                        {/* or if you have a default value (gray color) you can save it to above the return and call the styling as a variable */}
                        <div className="sr-only">Downvote Comment</div>
                        <button onClick={() => this.props.downvoteComment(comment.id)} className="downvote"><i className="fas fa-thumbs-down"></i></button>
                        
                        {/* <br></br> */}
                        {/* <span className="error-text-message">{(this.state.errors) ? "Please sign in before voting!" : null}</span>  */}
                        {/* this.state.errors === true for a boolean! not "true" in strings */}
                    </div>
                </div>
            </>
        )
    }
}

export default CommentShow;