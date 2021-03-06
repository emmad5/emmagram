import * as ApiUtil from '../util/user_api_util';
import {receiveCurrentUser} from './session_actions';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER';


export const update = user => dispatch => (
    ApiUtil.update(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveUserErrors(err.responseJSON))
    ))
);

export const fetchUser = userId => dispatch => {
    console.log(userId)
    ApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
};

// export const fetchUsers = () => dispatch => {
//     return ApiUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
// }

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors: errors
});

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});
