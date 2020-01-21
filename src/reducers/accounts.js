import {
    ACCOUNTS_REQUESTED,
    ACCOUNTS_SUCCEEDED,
    ACCOUNT_REQUESTED,
    ACCOUNT_SUCCEEDED,
} from "../actions/accounts";

export default function accounts(state = {}, action) {
    switch (action.type) {
        case ACCOUNTS_REQUESTED:
            return {...state, loading: true};
        case ACCOUNTS_SUCCEEDED:
            return {...state, loading: false , accounts: action.accounts};
        case ACCOUNT_REQUESTED:
            return {...state, loading: true, account: action.account};
        case ACCOUNT_SUCCEEDED:
            return {...state, loading: false , account: action.account};
        default:
            return state;
    }
}
