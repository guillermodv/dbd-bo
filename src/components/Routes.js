import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Footer, Header} from "./commons";
import DashboardList from "./dashboard";
import DashboardItem from "./dashboard/dashboardItem";

import UnderConstruction from "./commons/UnderConstruction";
import Login from "./authentication/Login";
import {requestFetchSession} from "../actions/session";

const Routes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestFetchSession());
    }, [dispatch]);

    return (
        <Router>
            <Header/>
            <Switch>
                {<Route exact path="/login" component={Login}/>}
                {<Route exact path="/" component={DashboardList}/>}
                {<Route exact path="/dashboard" component={DashboardList}/>}
                {<Route exact path="/dashboard/:id" component={DashboardItem}/>}
                {<Route exact path="/list" component={DashboardList}/>}
                {<Route exact path="/*" component={UnderConstruction}/>}
            </Switch>
            <Footer/>
        </Router>
    );
};

export default Routes;
