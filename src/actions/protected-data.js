import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchWorkoutDataSuccess = workouts => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    workouts
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchWorkoutDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchWorkoutData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}`, {
        method: 'GET',
        headers: {
            'content-type' : 'application/json',
            'Authorization': `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch(fetchWorkoutDataSuccess(data))
        })
        .catch(err => {
            dispatch(fetchWorkoutDataError(err));
        });
};

export const CLEAR_SINGLE_PROTECTED_DATA_SUCCESS = 'CLEAR_SINGLE_PROTECTED_DATA_SUCCESS';
export const clearSingleWorkoutDataSuccess = workout => ({
    type: CLEAR_SINGLE_PROTECTED_DATA_SUCCESS,
    workout
});

export const FETCH_SINGLE_PROTECTED_DATA_SUCCESS = 'FETCH_SINGLE_PROTECTED_DATA_SUCCESS';
export const fetchSingleWorkoutDataSuccess = workout => ({
    type: FETCH_SINGLE_PROTECTED_DATA_SUCCESS,
    workout
});

export const FETCH_SINGLE_PROTECTED_DATA_ERROR = 'FETCH_SINGLE_PROTECTED_DATA_ERROR';
export const fetchSingleWorkoutDataError = error => ({
    type: FETCH_SINGLE_PROTECTED_DATA_ERROR,
    error
});

export const fetchSingleWorkoutData = workout => (dispatch, getState) => {
    dispatch(clearSingleWorkoutDataSuccess());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/${workout}` , {
        method: 'GET',
        headers: {
            'content-type' : 'application/json',
            'Authorization': `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(fetchSingleWorkoutDataSuccess(data))
        })
        .catch(err => {
            dispatch(fetchSingleWorkoutDataError(err));
        });
};

export const CREATE_PROTECTED_DATA_SUCCESS = 'CREATE_PROTECTED_DATA_SUCCESS';
export const createWorkoutDataSuccess = workouts => ({
    type: CREATE_PROTECTED_DATA_SUCCESS,
    workouts
});

export const CREATE_PROTECTED_DATA_ERROR = 'CREATE_PROTECTED_DATA_ERROR';
export const createWorkoutDataError = error => ({
    type: CREATE_PROTECTED_DATA_ERROR,
    error
});


export const createWorkoutData = workout => (dispatch, getState) => {
        const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization' : `Bearer ${authToken}`
        },
        body : JSON.stringify(workout)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(createWorkoutDataSuccess(data))
        })
        .catch(err => {
            dispatch(createWorkoutDataError(err))
        });
};

export const DELETE_PROTECTED_DATA_SUCCESS = 'DELETE_PROTECTED_DATA_SUCCESS';
export const deleteWorkoutDataSuccess = workouts => ({
    type: DELETE_PROTECTED_DATA_SUCCESS,
});

export const DELETE_PROTECTED_DATA_ERROR = 'DELETE_PROTECTED_DATA_ERROR';
export const deleteWorkoutDataError = error => ({
    type: DELETE_PROTECTED_DATA_ERROR,
    error
});

export const deleteWorkoutData = workout => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/${workout}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization' : `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(deleteWorkoutDataSuccess(data))
        })
        .catch(err => {
            dispatch(deleteWorkoutDataError(err))
        });
};

export const EDIT_PROTECTED_DATA_CLEAR = 'EDIT_PROTECTED_DATA_CLEAR';
export const editWorkoutDataClear = () => ({
    type: EDIT_PROTECTED_DATA_CLEAR
});

export const EDIT_PROTECTED_DATA_SUCCESS = 'EDIT_PROTECTED_DATA_SUCCESS';
export const editWorkoutDataSuccess = workout => ({
    type: EDIT_PROTECTED_DATA_SUCCESS,
    workout
});

export const EDIT_PROTECTED_DATA_ERROR = 'EDIT_PROTECTED_DATA_ERROR';
export const editWorkoutDataError = error => ({
    type: EDIT_PROTECTED_DATA_ERROR,
    error
});

export const editWorkoutData = workout => (dispatch, getState) => {
    dispatch(editWorkoutDataClear());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/${workout._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization' : `Bearer ${authToken}`
        },
        body: JSON.stringify(workout)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(editWorkoutDataSuccess(data))
        })
        .catch(err => {
            dispatch(editWorkoutDataError(err))
        });
};
