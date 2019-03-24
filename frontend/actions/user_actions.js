import * as ApiUtil from '../util/user_api_util';
import {receiveCurrentUser} from './session_actions';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const update = user => dispatch => (
    ApiUtil.update(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveUserErrors(err.responseJSON))
    ))
);

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors: errors
});

