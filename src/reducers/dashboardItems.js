import {
    DASHBOARD_ITEM_REQUESTED,
    DASHBOARD_ITEM_SUCCEEDED,
    DASHBOARD_ITEMS_REQUESTED,
    DASHBOARD_ITEMS_SUCCEEDED,
} from "../actions/dashboard";

export default function dashboardItems(state = {}, action) {
    switch (action.type) {
        case DASHBOARD_ITEMS_REQUESTED:
            return {...state, loading: true, items: []};
        case DASHBOARD_ITEMS_SUCCEEDED:
            return {...state, loading: false , items: action.items};
        case DASHBOARD_ITEM_REQUESTED:
            return {...state, loading: true, items: []};
        case DASHBOARD_ITEM_SUCCEEDED:
            return {...state, loading: false , items: action.items};
        default:
            return state;
    }
}
