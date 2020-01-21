import React, {Fragment, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {Menu, Search, ShowIconWithLabel} from "../../index";
import {requestFetchSession} from "../../../../actions/session";
import UserService from '../../../../services/user';

const Header = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestFetchSession());
    }, [dispatch]);

    const logOut = () => {
        UserService.removeUser();
        window.location = '/';
    };

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary " style={{'height': '40px', 'font-size': '14px'}}>
                <span className="navbar-brand mx-1">
                    <p>Precision eXtract</p>
                </span>
                <Menu/>
                <Search/>
                <div className="btn-group dropleft">
                    <button type="button"
                            className="btn dropdown-toggle text-white"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                        LogOut
                    </button>
                    <div className="dropdown-menu">
                        <div className="dropdown-item">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => logOut()}
                            >
                                <ShowIconWithLabel type={"fa fa-sign-out"} label={"LogOut"}/>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;
