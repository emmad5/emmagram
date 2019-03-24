import * as ApiUtil from '../util/user_api_utl';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const update = user => dispatch => (
    ApiUtil.update(user).then(user => (
        dispatch(receiveUser(user))
    ), err => (
        dispatch(receiveUserErrors(err.responseJSON))
    ))
);

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors: errors
});


export const receiveUser = user => ({
    type: RECEIVE_USER,
    user: user
});