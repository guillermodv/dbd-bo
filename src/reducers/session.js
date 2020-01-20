import {
    SESSION_REQUESTED, SESSION_RECEIVED, SET_ERROR_LOGIN, VALIDATE_SESSION
} from '../actions/session';

export default function session(state = {isValidLogin: true, loading: true}, action) {
    switch (action.type) {
        case VALIDATE_SESSION:
            return {...state, isValidLogin: true, loading: true};
        case SESSION_REQUESTED:
            return {...state, loading: true};
        case SESSION_RECEIVED:
            return {...state, profile: action.profile, loading: false};
        case SET_ERROR_LOGIN:
            return {...state, isValidLogin: action.status , loading: false};
        default:
            return state;
    }
}
