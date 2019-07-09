export const fetchAnnotations = (trackId) => {
    return $.ajax({
        method: 'GET',
        url: 'api/annotations',
        data: { trackId }
    })
}

export const fetchAnnotation = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/annotations/${id}`,
    })
}

export const createAnnotation = (annotation) => {
    // debugger
    // commented out
    return $.ajax({
        method: 'POST',
        url: `api/annotations/`,
        data: { annotation }
    })
}

export const updateAnnotation = (annotation) => {
    // debugger
    return $.ajax({
        method: 'PATCH',
        url: `api/annotations/${annotation.id}`,
        data: { annotation }
    })
}

export const deleteAnnotation = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/annotations/${id}`,
    })
}