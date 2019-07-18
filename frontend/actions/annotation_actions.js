import * as AnnotationApiUtil from '../util/annotation_api_util';

export const RECEIVE_ANNOTATIONS = "RECEIVE_ANNOTATIONS";
export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const REMOVE_ANNOTATION = "REMOVE_ANNOTATION";

const receiveAnnotations = ({annotations, users}) => {
    return ({
        type: RECEIVE_ANNOTATIONS,
        annotations,
        users
    })
}

const receiveAnnotation = ({annotation, user}) => { // this is how we deconstruct the payload to pass onto the users
    return ({                                       // show.json.jbuilder's variable names match these.
        type: RECEIVE_ANNOTATION,                   // otherwise, we could have taken (payload) as the argument, and down here, done payload.annotation and payload.user
        annotation,
        user
    })
}

const removeAnnotation = (id) => {
    // debugger
    return ({
        type: REMOVE_ANNOTATION,
        annotationId: id
    })
}

export const fetchAnnotations = (trackId) => {
    return (dispatch) => {
        return AnnotationApiUtil.fetchAnnotations(trackId).then((payload) => {
            // debugger
            return dispatch(receiveAnnotations(payload));
        })
    }
}

export const fetchAnnotation = (id) => {
    return (dispatch) => {
        return AnnotationApiUtil.fetchAnnotation(id).then((promiseObject) => {
            return dispatch(receiveAnnotation(promiseObject));
        })
    }
}

export const createAnnotation = (annotation) => {
    return (dispatch) => {
        return AnnotationApiUtil.createAnnotation(annotation).then((payload) => {
            return dispatch(receiveAnnotation(payload));
        })
    }
}

export const updateAnnotation = (annotation) => {
    return (dispatch) => {
        return AnnotationApiUtil.updateAnnotation(annotation).then((promiseObject) => {
            return dispatch(receiveAnnotation(promiseObject));
        })
    }
}

export const deleteAnnotation = (id) => {
    return (dispatch) => {
        return AnnotationApiUtil.deleteAnnotation(id).then((promiseObject) => {
            return dispatch(removeAnnotation(promiseObject));
        })
    }
}