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
            dispatch(fetchWorkoutDataSuccess(data))
        })
        .catch(err => {
            dispatch(fetchWorkoutDataError(err));
        });
};

export const CREATE_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const createWorkoutDataSuccess = workouts => ({
    type: CREATE_PROTECTED_DATA_SUCCESS,
    workouts
});

export const CREATE_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
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

export const DELETE_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const deleteWorkoutDataSuccess = workouts => ({
    type: DELETE_PROTECTED_DATA_SUCCESS,
});

export const DELETE_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
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