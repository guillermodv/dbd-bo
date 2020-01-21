import {takeEvery, all} from 'redux-saga/effects';

import {ERROR_OCCURRED} from '../actions/common';
import {
    ACCOUNTS_REQUESTED,
    ACCOUNT_REQUESTED,
} from "../actions/accounts";
import {SESSION_REQUESTED, VALIDATE_SESSION} from '../actions/session';
import {STATIC_DATA_REQUESTED} from "../actions/staticData";

import {fetchAccounts, getAccount} from "./accounts";
import handleError from './common';
import {fetchStaticData} from "./staticData";
import {validateSession, fetchSession} from './session';

export default function* root() {
    yield all([
        takeEvery(ACCOUNTS_REQUESTED, fetchAccounts),
        takeEvery(ACCOUNT_REQUESTED, getAccount),
        takeEvery(VALIDATE_SESSION, validateSession),
        takeEvery(SESSION_REQUESTED, fetchSession),
        takeEvery(ERROR_OCCURRED, handleError),
        takeEvery(STATIC_DATA_REQUESTED, fetchStaticData)
    ]);
}
