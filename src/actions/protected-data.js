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
