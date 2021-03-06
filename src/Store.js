import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './LocalStorage';
import authReducer from './reducers/Auth';
import protectedDataReducer from './reducers/ProtectedData';
import {setAuthToken, refreshAuthToken} from './actions/Auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        workouts: protectedDataReducer
    }),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;