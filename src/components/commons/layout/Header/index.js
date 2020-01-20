import React, {Fragment, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Menu, Search, ShowIcon, ShowIconWithLabel} from "../../index";
import {requestFetchSession} from "../../../../actions/session";
import UserService from '../../../../services/user';
import {Link} from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.session.profile);

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
                <img src="../../../../logo.png" style={{'width': '35px', 'border': '1px solid white'}} alt="..."/>
                <span className="navbar-brand mx-1">
                    {profile && <a>CARMOCAL CRM</a>}
                </span>
                {profile && <Menu/>}
                {profile &&<Search/>}
                {profile && <div className="btn-group dropleft">
                    <button type="button"
                            className="btn dropdown-toggle text-white"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                        Salir
                    </button>
                    <div className="dropdown-menu">
                        <div className="mx-2 text-center " style={{'font-size': '12px'}}>
                            <ShowIcon type="fas fa-user"/>
                            <div className="font-weight-bold">&nbsp;{profile.name}&nbsp;{profile.surname}</div>
                            <div className="font-italic">&nbsp;{profile.email}</div>
                            <hr/>
                        </div>
                        <div className="dropdown-item">
                            <Link to={'/*'} className="text-reset">
                                Perfil
                            </Link>
                        </div>
                        <div className="dropdown-item">
                            <Link to={'/*'} className="text-reset">
                                Ayuda
                            </Link>
                        </div>
                        <div className="dropdown-item">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => logOut()}
                            >
                                <ShowIconWithLabel type={"fa fa-sign-out"} label={"Salir"}/>
                            </button>
                        </div>
                    </div>
                </div>}
            </nav>
        </Fragment>
    );
};

export default Header;