import {
    ACCOUNTS_REQUESTED,
    ACCOUNTS_SUCCEEDED,
    ACCOUNT_REQUESTED,
    ACCOUNT_SUCCEEDED,
    ACCOUNT_SAVE_SUCCEEDED,
    ACCOUNT_SAVE_FAILED,
    ACCOUNT_SAVE_REQUESTED,
    ACCOUNT_REMOVE_REQUESTED,
    ACCOUNT_REMOVE_FAILED,
    ACCOUNT_REMOVE_SUCCEEDED
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
        case ACCOUNT_SAVE_REQUESTED:
            return {...state, loading: true , status: ''};
        case ACCOUNT_SAVE_SUCCEEDED:
            return {...state, loading: false , status: 'Cuenta salvada con éxito.'};
        case ACCOUNT_SAVE_FAILED:
            return {...state, loading: false , status: 'No se pudo salvar la cuenta.'};
        case ACCOUNT_REMOVE_REQUESTED:
            return {...state, loading: true , status: ''};
        case ACCOUNT_REMOVE_SUCCEEDED:
            return {...state, loading: false , status: 'Cuenta eliminada con éxito.'};
        case ACCOUNT_REMOVE_FAILED:
            return {...state, loading: false , status: 'No se pudo eliminar la cuenta.'};
        default:
            return state;
    }
}
