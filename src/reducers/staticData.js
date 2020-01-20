import {STATIC_DATA_SUCCEEDED, STATIC_DATA_REQUESTED} from '../actions/staticData';

export default function staticData(state = {profile: {}}, action) {
    switch (action.type) {
        case STATIC_DATA_REQUESTED:
            return {...state, data: []};
        case STATIC_DATA_SUCCEEDED:
            return {...state, profile: {...action.profile}};
        default:
            return state;
    }
}
