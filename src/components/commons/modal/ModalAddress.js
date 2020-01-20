import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import {ModalButtonFooter} from "../../commons/index";


const ModalAddress = ({item, title, onAccept, onDismiss, description, large}) => {
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
                    <div className="col-5 mb-1">
                        <label>Tipo:</label>
                        <select class="custom-select" name="tipo">
                        <option value="1">A</option>
                        <option value="2">B</option>
                        </select>
                    </div>
                    <div className="col-7 mb-1">
                        <label>Nombre:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="name"
                            onChange={(e) => handleChange(e)}
                            required
                            value={object ? object.services:''}
                        />
                    </div>
                    <div className="col-12 mb-1">
                        <label>Dirección:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="address"
                            onChange={(e) => handleChange(e)}
                            required
                            value={object ? object.services:''}
                        />
                    </div>
                    
                    <div className="col-5 mb-1">
                        <label>País:</label>
                        <select class="custom-select" name="país">
                        <option value="1">Argentina</option>
                        <option value="2">Brasil</option>
                        </select>
                    </div>
                    <div className="col-7 mb-1">
                        <label>Provincia/Estado:</label>
                        <select class="custom-select" name="estado">
                        <option value="1"></option>
                        <option value="2"></option>
                        </select>
                    </div>
                    <div className="col-7 mb-1">
                        <label>Ciudad:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="city"
                            onChange={(e) => handleChange(e)}
                            required
                            value={object ? object.services:''}
                        />
                    </div>
                    <div className="col-5 mb-1">
                        <label>Código Postal:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="codpostal"
                            onChange={(e) => handleChange(e)}
                            required
                            value={object ? object.services:''}
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


ModalAddress.propTypes = {
    onDismiss: PropTypes.func.isRequired,
    message: PropTypes.string,
    onAccept: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.element,
    large: PropTypes.bool
};

ModalAddress.defaultProps = {
    title: 'Confirme Acción',
    message: null,
    children: null,
    onAccept: null,
    large: false
};

export default ModalAddress;
