import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class ShowIcon extends Component {
    render() {
        const {type} = this.props;
        return (
            <Fragment>
                <i className={type}></i>
            </Fragment>
        );
    }
}

ShowIcon.propTypes = {
    type: PropTypes.string.isRequired
};

export default ShowIcon;
