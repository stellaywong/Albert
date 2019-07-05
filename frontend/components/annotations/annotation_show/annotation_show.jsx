import React from 'react';
import { Link } from 'react-router-dom';
//it's a class component, ergo, don't import with curly brackets -- only if it has multiple exports (like action creators)

class AnnotationShow extends React.Component {
    render() {
        const { annotation, annotator } = this.props; //destructure props here
        // debugger

        return (
            <>
                <label className="screenreader-only">Show Annotation Form</label>
                <label className="screenreader-only">{annotation.annotation_body}</label>

                <h3 className="annotation-body">{annotation.annotation_body}</h3>
                <h3>{annotator}</h3>

                {/* <button onClick={() => deleteAnnotation(annotation.id)}>Delete</button> */}
            </>
        );
    }
}

export default AnnotationShow;