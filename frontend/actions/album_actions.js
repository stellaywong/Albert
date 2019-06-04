import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";

const receiveAlbums = (albums) => {
    return ({
        type: RECEIVE_ALBUMS,
        albums
    })
}

const receiveAlbum = (album) => {
    return ({
        type: RECEIVE_ALBUM,
        album
    })
}

const removeAlbum = (album) => {
    return ({
        type: REMOVE_ALBUM,
        albumId: album.id
    })
}


export const fetchAlbums = () => {
    return (dispatch) => {
        return AlbumApiUtil.fetchAlbums().then((promiseObject) => {
            return dispatch(receiveAlbums(promiseObject));
        })
    }
}

export const fetchAlbum = (id) => {
    return (dispatch) => {
        return AlbumApiUtil.fetchAlbum(id).then((promiseObject) => {
            return dispatch(receiveAlbum(promiseObject));
        })
    }
}

export const createAlbum = (album) => {
    return (dispatch) => {
        return AlbumApiUtil.createAlbum(album).then((promiseObject) => {
            return dispatch(receiveAlbum(promiseObject));
        })
    }
}

export const updateAlbum = (album) => {
    return (dispatch) => {
        return AlbumApiUtil.updateAlbum(album).then((promiseObject) => {
            return dispatch(receiveAlbum(promiseObject));
        })
    }
}

export const deleteAlbum = (id) => {
    return (dispatch) => {
        return AlbumApiUtil.deleteAlbum(id).then((promiseObject) => {
            return dispatch(removeAlbum(promiseObject));
        })
    }
}