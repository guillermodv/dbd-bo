import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Footer, Header} from "./commons";
import OpportunitiesList from "./opportunities";
import UnderConstruction from "./commons/UnderConstruction";
import Login from "./authentication/Login";
import {requestFetchSession} from "../actions/session";

const Routes = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.session.profile);

    useEffect(() => {
        dispatch(requestFetchSession());
    }, [dispatch]);

    return (
        <Router>
            <Header/>
            <Switch>
                {!profile && <Route exact path="/" component={Login}/>}
                {!profile && <Route exact path="/login" component={Login}/>}
                {!profile && <Route exact path="/*" component={Login}/>}
                {profile && <Route exact path="/login" component={Login}/>}
                {profile && <Route exact path="/" component={OpportunitiesList}/>}
                {profile && <Route exact path="/list" component={OpportunitiesList}/>}
                {profile && <Route exact path="/*" component={UnderConstruction}/>}
            </Switch>
            <Footer/>
        </Router>
    );
};

export default Routes;
