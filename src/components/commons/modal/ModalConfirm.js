import React from 'react';
import PropTypes from 'prop-types';
import {
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import {ShowIconWithLabel} from "../index";

const ModalConfirm = ({
    message, title, onAccept, onDismiss, children, large
}) => (
    <Modal isOpen onHide={onDismiss} bsSize={large ? 'large' : ''}>
        <ModalHeader closeButton>
            {title}
        </ModalHeader>
        <ModalBody>
            {message}
            {children}
        </ModalBody>
        <ModalFooter>
            {onAccept && (
                <ShowIconWithLabel label="Cancelar" type="faBan"/>
            )}
            <ShowIconWithLabel label="Cancelar" type="faBan"/>
        </ModalFooter>
    </Modal>
);

ModalConfirm.propTypes = {
    onDismiss: PropTypes.func.isRequired,
    message: PropTypes.string,
    onAccept: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.element,
    large: PropTypes.bool
};

ModalConfirm.defaultProps = {
    title: 'Confirme Acción',
    message: null,
    children: null,
    onAccept: null,
    large: false
};

export default ModalConfirm;
