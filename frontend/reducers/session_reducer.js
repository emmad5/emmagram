import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/session_actions';

const defaultState = {
    id: null
};

export default (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {id: action.user.id};
        case LOGOUT_USER:
            return defaultState;
        default:
            return state;
    }
};