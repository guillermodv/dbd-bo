import React from 'react';
import PropTypes from 'prop-types';
import {
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import {ModalButtonFooter} from "../../commons/index";

const ModalNew = ({item, title, onAccept, onDismiss, description, large}) => (
    <Modal isOpen onHide={onDismiss} bsSize={large ? 'large' : ''}>
        <ModalHeader closeButton>
            {title}
        </ModalHeader>
        <ModalBody>
            {description}
            <div className="row form-group">
                <div className="col-5">
                    <label>name:</label>
                    <input
                        type="string"
                        className="form-control"
                        name="name"
                        required
                        value={item ? item.name: ''}
                    />
                </div>
                <div className="col-7">
                    <label>description:</label>
                    <input
                        type="string"
                        className="form-control"
                        name="description"
                        required
                        value={item ? item.description:''}
                    />
                </div>
            </div>
        </ModalBody>
        <ModalFooter>
            <ModalButtonFooter onAccept={onAccept} onDismiss={onDismiss} />
        </ModalFooter>
    </Modal>
);

ModalNew.propTypes = {
    onDismiss: PropTypes.func.isRequired,
    message: PropTypes.string,
    onAccept: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.element,
    large: PropTypes.bool
};

ModalNew.defaultProps = {
    title: 'Confirme Acción',
    message: null,
    children: null,
    onAccept: null,
    large: false
};

export default ModalNew;
