import * as ApitUtil from '../util/session_api_utl';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_USER = "LOGOUT_USER";
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const login = user => dispatch => (
    ApitUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user))),
        errors => dispatch(receiveSessionErrors(errors))
);

export const logout = () => dispatch => (
    ApitUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => (
    ApitUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user))),
        errors => dispatch(receiveSessionErrors(errors))
);

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});
export const logoutCurrentUser = () => ({
    type: LOGOUT_USER
});
export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});