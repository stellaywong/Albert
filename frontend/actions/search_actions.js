import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

// regular action creator
export const receiveSearchResults = (payload) => {
    return {
        type: RECEIVE_SEARCH_RESULTS,
        artists,
        albums
    }
}

// thunk action creator
// receives input from the input bar
// sends that to the backend
// receives a payload called "results"
// then passed up to above regular action creator
// that then goes to the reducers
export const fetchSearchResults = (input) => dispatch => (
    SearchAPIUtil.fetchSearchResults(input).then(
        results => dispatch(receiveSearchResults(results))
    )
)