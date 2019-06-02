export const fetchTracks = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/tracks',
    })
}

export const fetchTrack = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/tracks/${id}`,
    })
}

export const createTrack = (track) => {
    return $.ajax({
        method: 'POST',
        url: `api/tracks/`,
    })
}

export const updateTrack = (track) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/tracks/${id}`,
    })
}

export const deleteTrack = (id) => {
    return $.ajax({
        method: 'DELETE',
    url: `api/tracks/${id}`,
    })
}