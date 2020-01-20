import React from 'react';
import PropTypes from 'prop-types';

const Title = ({label}) => (
    <div className={"row col-12 mt-1 mb-1"}>
        <div className={"text-left"}>
            <h4>{label}</h4>
        </div>
    </div>
);

Title.propTypes = {
    label: PropTypes.string
};

Title.defaultProps = {
    label: 'titulo'
};

export default Title;
