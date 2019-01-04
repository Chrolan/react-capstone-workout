import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    CREATE_PROTECTED_DATA_SUCCESS,
    CREATE_PROTECTED_DATA_ERROR,
    DELETE_PROTECTED_DATA_SUCCESS,
    DELETE_PROTECTED_DATA_ERROR
} from '../actions/protected-data';

const initialState = {
    loading: false,
    workouts: [],
    currentWorkout: {},
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            workouts: [...action.workouts],
            error: null
        });
    }
    if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    if (action.type === CREATE_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            workouts: [...action.workouts],
            error: null
        });
    }
    if (action.type === CREATE_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    if (action.type === DELETE_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            workouts: [...action.workouts],
            error: null
        });
    }
    else if (action.type === DELETE_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
