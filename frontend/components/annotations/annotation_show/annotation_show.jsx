import React from 'react';
import { Link } from 'react-router-dom';

//it's a class component, ergo, don't import with curly brackets -- only if it has multiple exports (like action creators)

class AnnotationShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { annotation, annotator } = this.props; //destructure props here

        return (
            <>
                <div className="screenreader-only">Show Annotation Form</div>
                <div className="screenreader-only">{annotation.annotation_body}</div>

                <h3>{annotator}</h3>        {/* annotator's username */}
                <h3 className="annotation-body">{annotation.annotation_body}</h3>   {/* annotation body */}

                <button onClick={() => {
                    this.props.deleteAnnotation(annotation.id);
                    this.props.setAnnotation(null, null);   // to make the deleted annotation disappear off the sidebar
                }}
                className="create-annotation-and-comment-button"
                >Delete Annotation</button>
            </>
        );
    }
}

export default AnnotationShow;



