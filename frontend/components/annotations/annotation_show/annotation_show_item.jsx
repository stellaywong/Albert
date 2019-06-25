import React from 'react';
import { Link } from 'react-router-dom';

const AnnotationShowItem = ({ annotation }) => {
    return (
        <>
        <h3>{annotation.annotation_body}</h3>
        <h3>{annotation.annotator_id}</h3>

        <button onClick={() => deleteAnnotation(annotation.id)}>Delete</button>
        </>
    );
};

export default AnnotationShowItem;