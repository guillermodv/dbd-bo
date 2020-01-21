import {call, put} from 'redux-saga/effects';

import {handleError} from '../actions/common';
import {
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
