import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

const receiveTracks = (tracks) => {
    return ({
        type: RECEIVE_TRACKS,
        tracks
    })
}

const receiveTrack = (promiseObj) => {
    // debugger
    return ({
        type: RECEIVE_TRACK,
        track: promiseObj.track,
        annotations: promiseObj.annotations,
        comments: promiseObj.comments,
        // now we're sending two things at once
        // so promiseObject received now has two keys inside
    })
}

const removeTrack = (track) => {
    return ({
        type: REMOVE_TRACK,
        trackId: track.id
    })
}

export const fetchTracks = () => {
    return (dispatch) => {
        return TrackApiUtil.fetchTracks().then((promiseObject) => {
            return dispatch(receiveTracks(promiseObject));
        })
    }
}

export const fetchTrack = (id) => {
    return (dispatch) => {
        return TrackApiUtil.fetchTrack(id).then((promiseObject) => {
            return dispatch(receiveTrack(promiseObject));
        })
    }
}

export const createTrack = (track) => {
    // debugger
    // commented out
    return (dispatch) => {
        return TrackApiUtil.createTrack(track).then((promiseObject) => {
            return dispatch(receiveTrack(promiseObject));
        })
    }
}

export const updateTrack = (track) => {
    // debugger
    return (dispatch) => {
        return TrackApiUtil.updateTrack(track).then((promiseObject) => {
            return dispatch(receiveTrack(promiseObject));
        })
    }
}

export const deleteTrack = (id) => {
    return (dispatch) => {
        return TrackApiUtil.deleteTrack(id).then((promiseObject) => {
            return dispatch(removeTrack(promiseObject));
        })
    }
}