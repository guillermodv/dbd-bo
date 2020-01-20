import React from 'react';
import {Link} from "react-router-dom";

const Menu = ({profile}) => {
    return (
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={'/events'} className="nav-link">
                        Eventos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/accounts'} className="nav-link">
                        Cuentas
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/opportunities'} className="nav-link">
                        Oportunidades
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/*'} className="nav-link">
                        Reportes
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/*'} className="nav-link">
                        Administración
                    </Link>
                </li>
            </ul>
        </div>);
};

export default Menu;

