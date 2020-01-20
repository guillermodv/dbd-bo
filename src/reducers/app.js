import {
    CLEAR_ERROR,
} from '../actions/common';

export default function (state = {}, action) {
    switch (action.type) {
        case CLEAR_ERROR:
            return {...state, errorMsg: null};
        default:
            return state;
    }
}
