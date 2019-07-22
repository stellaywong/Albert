import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

// regular action creator
export const receiveSearchResults = ({tracks}) => {
    return {
        type: RECEIVE_SEARCH_RESULTS,
        tracks
    }
}


export const clearSearchResults = () => {
    return {
        type: CLEAR_SEARCH_RESULTS,
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