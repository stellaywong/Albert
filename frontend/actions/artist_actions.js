import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS= "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST= "RECEIVE_ARTIST";
export const REMOVE_ARTIST= "REMOVE_ARTIST";

const receiveArtists = (artists) => {
    return ({
        type: RECEIVE_ARTISTS,
        artists
    })
}

const receiveArtist = (artist) => {
    return ({
        type: RECEIVE_ARTIST,
        artist
    })
}

const removeArtist = (artist) => {
    return ({
        type: REMOVE_ARTIST,
        artistId: artist.id
    })
}


export const fetchArtists = () => {
    return (dispatch) => {
        return ArtistApiUtil.fetchArtists().then((promiseObject) => {
            return dispatch(receiveArtists(promiseObject));
        })
    }
}

export const fetchArtist = (id) => {
    return (dispatch) => {
        return ArtistApiUtil.fetchArtist(id).then((promiseObject) => {
            return dispatch(receiveArtist(promiseObject));
        })
    }
}

export const createArtist = (artist) => {
    return (dispatch) => {
        return ArtistApiUtil.createArtist(artist).then((promiseObject) => {
            return dispatch(receiveArtist(promiseObject));
        })
    }
}

export const updateArtist = (artist) => {
    return (dispatch) => {
        return ArtistApiUtil.updateArtist(artist).then((promiseObject) => {
            return dispatch(receiveArtist(promiseObject));
        })
    }
}

export const deleteArtist = (id) => {
    return (dispatch) => {
        return ArtistApiUtil.deleteArtist(id).then((promiseObject) => {
            return dispatch(removeArtist(promiseObject));
        })
    }
}