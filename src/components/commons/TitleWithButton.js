import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {ShowIconWithLabel} from "./index";

const TitleWithButton = ({label, buttonLabel}) => (
    <div className={"row col-13 mt-2 mb-1 mx-1"}>
        <div className={"col-6 text-left"}>
            <h2>{label}</h2>
        </div>
        <div className={"col-sm-6 text-right"}>
            <Link to="/account/new" className="btn btn-secondary">
                <ShowIconWithLabel label={buttonLabel} type={"fas fa-plus"}/>
            </Link>
        </div>
    </div>
);

TitleWithButton.propTypes = {
    label: PropTypes.string,
    buttonLabel: PropTypes.string.isRequired
};

TitleWithButton.defaultProps = {
    label: 'titulo'
};

export default TitleWithButton;
