import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner'

const LoadingIndicator = ({label}) => (
    <div className="text-center icon-container">
        <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={9000}
        />
        <br/>
        {label}
    </div>
);

LoadingIndicator.propTypes = {
    label: PropTypes.string
};

LoadingIndicator.defaultProps = {
    label: 'Cargando...'
};

export default LoadingIndicator;
