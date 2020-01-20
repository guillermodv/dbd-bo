import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import {ModalButtonFooter} from "../../commons/index";

const ModalServices = ({item, title, onAccept, onDismiss, description, large}) => {

    const [object, setObject] = useState(item);

    const handleChange = ({target: {name, value}}) => {
        setObject({...object, [name]: value});
    };

    return (
        <Modal isOpen onHide={onDismiss} bsSize={large ? 'large' : ''}>
            <ModalHeader closeButton>
                {title}
            </ModalHeader>
            <ModalBody>
                {description}
                <div className="row form-group">
                    <div className="col-6 mb-1">
                        <label>Unidad De Negocio:</label>
                        <select class="custom-select" name="unidad">
                        <option value="1">IBC</option>
                        <option value="2">Isotanques</option>
                        </select>
                    </div>
                    <div className="col-6 mb-1">
                        <label>Servicios:</label>
                        <select class="custom-select" name="servicios">
                        <option value="1">Venta</option>
                        <option value="2">Gerenciamiento</option>
                        <option value="3">Lavado Y Servicio Estándar</option>
                        </select>
                    </div>
                    <div className="col-12 mb-1">
                        <label>Definición:</label>
                        <textarea class = "form-control" rows = "3" placeholder = "" ></textarea>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <ModalButtonFooter onAccept={onAccept} onDismiss={onDismiss} />
            </ModalFooter>
        </Modal>
    )
};


ModalServices.propTypes = {
    onDismiss: PropTypes.func.isRequired,
    message: PropTypes.string,
    onAccept: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.element,
    large: PropTypes.bool
};

ModalServices.defaultProps = {
    title: 'Confirme Acción',
    message: null,
    children: null,
    onAccept: null,
    large: false
};

export default ModalServices;
