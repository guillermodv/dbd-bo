import {combineReducers} from 'redux';

import app from './app';
import staticData from "./staticData";
import session from "./session";
import accounts from "./accounts";

export default combineReducers({
    app, accounts, staticData, session
});
