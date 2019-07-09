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

const receiveAnnotation = (annotation) => {
    return ({
        type: RECEIVE_ANNOTATION,
        annotation
    })
}

const removeAnnotation = (annotation) => {
    return ({
        type: REMOVE_ANNOTATION,
        annotationId: annotation.id
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
        return AnnotationApiUtil.createAnnotation(annotation).then((promiseObject) => {
            return dispatch(receiveAnnotation(promiseObject));
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