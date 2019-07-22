import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions';
// import { merge } from 'lodash';

const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.tracks;
        case CLEAR_SEARCH_RESULTS:
            return {};  // this is an empty object so the search results clear
        default:
            return oldState
    }
};

export default searchReducer;