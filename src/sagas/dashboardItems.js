import {call, put} from 'redux-saga/effects';

import {handleError} from '../actions/common';
import {
    receiveDashboardItem,
    receiveDashboardItems,
} from "../actions/dashboard";
import DashboardService from "../services/dashboardService";

export function* fetchDashboardItems() {
    try {
        const items = yield call(DashboardService.fetchAll);
        yield put(receiveDashboardItems(items));
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* getDashboardItem({id}) {
    try {
        const item = yield call(DashboardService.get, id);
        yield put(receiveDashboardItem(item));
    } catch (err) {
        yield put(handleError(err));
    }
}
