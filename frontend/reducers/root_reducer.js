import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import searchReducer from './search_reducer';

export default combineReducers({
    session: sessionReducer,    // signup, signin, signout
    entities: entitiesReducer,  // tracksReducer etc. go into entitiesReducer, not into rootReducer level
    errors: errorsReducer,
    ui: uiReducer,              // add for modal
    search: searchReducer,
});

    // annotations: annotationsReducer, // this is extra -- you'd have an annotations slice outside of your entities group of slices and annotations gets doubled.