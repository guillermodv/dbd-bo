import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import {ModalButtonFooter} from "../../commons/index";



const ModalOportunities = ({item, title, onAccept, onDismiss, description, large}) => {
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
                        <label>Unidad de negocio:</label>
                        <select class="custom-select" name="unidad">
                        <option value="1">IBC</option>
                        <option value="2">-</option>
                        </select>
                    </div>
                    <div className="col-6 mb-1">
                        <label>Servicio:</label>
                        <select class="custom-select" name="servicio">
                        <option value="1">VENTA</option>
                        <option value="2">-</option>
                        </select>
                    </div>
                    <div className="col-12 mb-1">
                        <label>Descripción:</label>
                        <textarea class = "form-control" rows = "3" placeholder = "" ></textarea>
                    </div>
                    <div className="col-6 mb-1">
                        <label>Potencial:</label>
                        <select class="custom-select" name="potencial">
                        <option value="1">ALTA</option>
                        <option value="2">MEDIA</option>
                        <option value="3">BAJA</option>
                        </select>
                    </div>
                    <div className="col-6 mb-1">
                        <label>Moneda:</label>
                        <select class="custom-select" name="moneda">
                        <option value="1">ARS</option>
                        <option value="2">USD</option>
                        </select>
                    </div>
                    
                    <div className="col-6 mb-1">
                    <label>Monto:</label>
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"></input>
                    </div>
                    </div>
                    <div className="col-6 mb-1">
                        <label>Estado:</label>
                        <select class="custom-select" name="estado">
                        <option value="1">COTIZADA</option>
                        <option value="2">CANCELADA</option>
                        </select>
                    </div>
                    <div className="col-12 mb-1">
                        <label>Comercial:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="mail"
                            onChange={(e) => handleChange(e)}
                            required
                            value=''
                        />
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <ModalButtonFooter onAccept={onAccept} onDismiss={onDismiss} />
            </ModalFooter>
        </Modal>
    )
};


ModalOportunities.propTypes = {
    onDismiss: PropTypes.func.isRequired,
    message: PropTypes.string,
    onAccept: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.element,
    large: PropTypes.bool
};

ModalOportunities.defaultProps = {
    title: 'Confirme Acción',
    message: null,
    children: null,
    onAccept: null,
    large: false
};

export default ModalOportunities;
