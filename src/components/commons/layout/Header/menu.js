import React from 'react';
import {Link} from "react-router-dom";

const Menu = ({profile}) => {
    return (
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={'/dashboard'} className="nav-link">
                        Dashboard
                    </Link>
                </li>
            </ul>
        </div>);
};

export default Menu;

