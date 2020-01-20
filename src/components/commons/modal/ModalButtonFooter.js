import React, {Fragment} from 'react';
import {ShowIcon} from "../index";

const ModalButtonFooter = ({onAccept, onDismiss}) => {

    const handleDismiss = () => {
        if (window.confirm('¿Desea Cancelar?, Perderá los datos asociados.')){
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
                Aceptar
            </button>
            <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDismiss()}
            >
                <ShowIcon type="fas fa-arrow-circle-left"/>&nbsp;
                Cancelar
            </button>
    </Fragment>
    );
};

export default ModalButtonFooter;
