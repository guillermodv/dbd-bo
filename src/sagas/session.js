/* eslint-disable import/prefer-default-export */
import {call, put} from 'redux-saga/effects';

import UserService from '../services/user';
import {handleError} from '../actions/common';
import {receiveSession, setErrorLogin} from '../actions/session';

export function* validateSession({queryParams}) {
    try {
        const isValid = yield call(UserService.validateSession, queryParams);
        yield put(setErrorLogin(isValid));
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* fetchSession() {
    try {
        const profile = yield call(UserService.getSession);
        yield put(receiveSession(profile));
    } catch (err) {
        yield put(handleError(err));
    }
}
