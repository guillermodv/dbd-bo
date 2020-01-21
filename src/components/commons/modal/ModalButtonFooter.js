import React, {Fragment} from 'react';
import {ShowIcon} from "../index";

const ModalButtonFooter = ({onAccept, onDismiss}) => {

    const handleDismiss = () => {
        if (window.confirm('¿do you want to cancel?.')){
            onDismiss();
        }
    };

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-success"
                onClick={() => onAccept()}
            >
                <ShowIcon type="fas fa-plus"/>&nbsp;
                OK
            </button>
            <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDismiss()}
            >
                <ShowIcon type="fas fa-arrow-circle-left"/>&nbsp;
                Cancel
            </button>
    </Fragment>
    );
};

export default ModalButtonFooter;
