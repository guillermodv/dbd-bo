import {combineReducers} from 'redux';

import app from './app';
import staticData from "./staticData";
import session from "./session";
import dashboardItems from "./dashboardItems";

export default combineReducers({
    app, dashboardItems, staticData, session
});
