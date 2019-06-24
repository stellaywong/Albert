import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateAnnotationForm from './create_annotation_form';
import { createAnnotation } from '../../../actions/annotation_actions';

const mapStateToProps = (state, ownProps) => {
    const annotation = { annotation_body: '' };
    const formType = 'Add Annotation';
    const currentUserId = state.session.id;

    return { annotation, formType, currentUserId };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAnnotationForm);
