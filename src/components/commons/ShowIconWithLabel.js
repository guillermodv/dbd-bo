import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class ShowIconWithLabel extends Component {
    render() {
        const {type, label} = this.props;
        return (
            <Fragment>
                <i className={type}></i> {''}
                {label}
            </Fragment>
        );
    }
}

ShowIconWithLabel.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default ShowIconWithLabel;
