import React from 'react';
import {connect} from 'react-redux';
import {deleteAnnotation} from '../../../actions/annotation_actions';
import AnnotationShow from './annotation_show';

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAnnotation: (id) => dispatch(deleteAnnotation(id)),
    };
};



export default connect(null, mapDispatchToProps)(AnnotationShow);
