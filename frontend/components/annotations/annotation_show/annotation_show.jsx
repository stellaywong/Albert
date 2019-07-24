import React from 'react';
import { Link } from 'react-router-dom';

//it's a class component, ergo, don't import with curly brackets -- only if it has multiple exports (like action creators)

class AnnotationShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state (there's no "let" bc it's in React)
        this.state = {
            errors: false,
        };
        // best practices: bind the context for the class functions in the constructor
        // because most likely, if you're bindin it, it's a method being called asynchronously or called as an event result
        // so any other coder should immediately know that these are two places that are likely to lose context
        this.signInOrUpvote = this.signInOrUpvote.bind(this);
        this.signInOrDownvote = this.signInOrDownvote.bind(this);
    }

    // for class functions, they are declared like this: they already know they are part of the class
    signInOrUpvote(event) {
        if (!this.props.currentUserId) {    // currentUserId lives in props -- anything we get from the container is prefaced with "this.props"
            this.setState({errors: true});  // of the three ways to re-render the page (change state, change props, cahnge parent component), we choose state
        } else {
            this.props.upvoteAnnotation(annotation.id);
        }
    }

    signInOrDownvote(event) {
        if (!this.props.currentUserId) {    // currentUserId lives in props -- anything we get from the container is prefaced with "this.props"
            this.setState({errors: true});  // of the three ways to re-render the page (change state, change props, cahnge parent component), we choose state
        } else {
            this.props.downvoteAnnotation(annotation.id);
        }
    }

    componentDidUpdate(oldProps) {          // componentDidUpdate always gives you the first argument as "oldProps" no matter what
        if (oldProps.annotation.id !== this.props.annotation.id) {
            this.setState({errors: false});
        }
    }
    // you don't need to call componentDidUpdate, or ANY of the lifecycle methods, because they just happen at different times, different parts of the life

    render() {
        const { annotation, annotator } = this.props; //destructure props here

        let voteColor = { "color": "gray" };
        if ( annotation.votes > 0) {
            voteColor = { "color": "#0ECB27" };
        } else if ( annotation.votes < 0 ) {
            voteColor = { "color": "red" };
        } 

        // the return method of any render is super important
        return (
            <>
                <div className="screenreader-only">Show Annotation Form</div>
                <div className="screenreader-only">{annotation.annotation_body}</div>
                <div className="annotation-whole-container">
                    <h3>{annotator}</h3>        {/* annotator's username */}
                    <h3 className="annotation-body">{annotation.annotation_body}</h3>   {/* annotation body */}

                    <button onClick={() => {
                        this.props.deleteAnnotation(annotation.id);
                        this.props.setAnnotation(annotation.id);   // to make the deleted annotation disappear off the sidebar
                    }}
                    className="create-annotation-and-comment-button"
                    >Delete Annotation</button>

                    <div className = 'vote-buttons'>
                        <div className="screenreader-only">Upvote Annotation</div>
                        <button onClick={this.signInOrUpvote} className="upvote"><i className="fas fa-thumbs-up"></i></button>
                            {/* signInOrUpvote needs to be this dot. it should be written uninvoked here, and event will be passed in */}
                        <span style={voteColor} >{annotation.votes}</span>
                            {/* you need a tag to style this, but it must always point to an object of two-pairs */}
                            {/* you can do the styling in-line, so the css is contained in this ternary */}
                            {/* or if you have a default value (gray color) you can save it to above the return and call the styling as a variable */}
                        <div className="screenreader-only">Downvote Annotation</div>
                        <button onClick={this.signInOrDownvote} className="downvote"><i className="fas fa-thumbs-down"></i></button>
                    
                        <br></br>
                        <span className="error-text-message">{(this.state.errors) ? "Please sign in before voting!" : null}</span> {/* this.state.errors === true for a boolean! not "true" in strings */}
                    </div>
                </div>
            </>
        );
    }
}

export default AnnotationShow;



