import React from 'react';
import { Link } from 'react-router-dom';

//it's a class component, ergo, don't import with curly brackets -- only if it has multiple exports (like action creators)

class AnnotationShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { annotation, annotator } = this.props; //destructure props here

        let voteColor = { "color": "gray" };
        if ( annotation.votes > 0) {
            voteColor = { "color": "#0ECB27" };
        } else if ( annotation.votes < 0 ) {
            voteColor = { "color": "red" };
        } 

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
                        <button onClick={() => this.props.upvoteAnnotation(annotation.id)} className="upvote"><i class="fas fa-thumbs-up"></i></button>
                        <span style={voteColor} >{annotation.votes}</span>
                            {/* you need a tag to style this, but it must always point to an object of two-pairs */}
                            {/* you can do the styling in-line, so the css is contained in this ternary */}
                            {/* or if you have a default value (gray color) you can save it to above the return and call the styling as a variable */}
                        <div className="screenreader-only">Downvote Annotation</div>
                        <button onClick={() => this.props.downvoteAnnotation(annotation.id)} className="downvote"><i class="fas fa-thumbs-down"></i></button>
                    </div>
                </div>
            </>
        );
    }
}

export default AnnotationShow;



