import {takeEvery, all} from 'redux-saga/effects';

import {ERROR_OCCURRED} from '../actions/common';
import {
    DASHBOARD_ITEMS_REQUESTED,
    DASHBOARD_ITEM_REQUESTED
} from "../actions/dashboard";
import {SESSION_REQUESTED, VALIDATE_SESSION} from '../actions/session';
import {STATIC_DATA_REQUESTED} from "../actions/staticData";

import {fetchDashboardItems, getDashboardItem} from "./dashboardItems";
import handleError from './common';
import {fetchStaticData} from "./staticData";
import {validateSession, fetchSession} from './session';

export default function* root() {
    yield all([
        takeEvery(DASHBOARD_ITEMS_REQUESTED, fetchDashboardItems),
        takeEvery(DASHBOARD_ITEM_REQUESTED, getDashboardItem),
        takeEvery(VALIDATE_SESSION, validateSession),
        takeEvery(SESSION_REQUESTED, fetchSession),
        takeEvery(ERROR_OCCURRED, handleError),
        takeEvery(STATIC_DATA_REQUESTED, fetchStaticData)
    ]);
}
