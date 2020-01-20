import {call, put} from 'redux-saga/effects';

import {handleError} from '../actions/common';
import {
    notifyRemoveAccountFailed,
    notifyRemoveAccountSucceeded,
    notifySaveAccountFailed,
    notifySaveAccountSucceeded,
    receiveAccount,
    receiveAccounts
} from "../actions/accounts";
import AccountService from "../services/accountService";

export function* fetchAccounts() {
    try {
        const accounts = yield call(AccountService.fetchAll);
        yield put(receiveAccounts(accounts));
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* getAccount({id}) {
    try {
        const account = yield call(AccountService.getAccount, id);
        yield put(receiveAccount(account));
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* saveAccount({account}) {
    try {
        const success = yield call(AccountService.saveAccount, account);
        if (success) {
            yield put(notifySaveAccountSucceeded());
        } else {
            yield put(notifySaveAccountFailed());
        }
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* removeAccount({id}) {
    try {
        const success = yield call(AccountService.removeAccount, id);
        if (success) {
            yield put(notifyRemoveAccountSucceeded());
        } else {
            yield put(notifyRemoveAccountFailed());
        }
    } catch (err) {
        yield put(handleError(err));
    }
}