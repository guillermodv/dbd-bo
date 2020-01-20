import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import {ModalButtonFooter} from "../../commons/index";

const ModalContacts = ({item, title, onAccept, onDismiss, description, large}) => {

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
                    <label>Nombre:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="phoneNumber"
                            onChange={(e) => handleChange(e)}
                            required
                            value={object ? object.services:''}
                        />
                    </div>
                    <div className="col-6 mb-1">
                        <label>Apellido:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="phoneNumber"
                            onChange={(e) => handleChange(e)}
                            required
                            value={object ? object.services:''}
                        />
                    </div>
                    <div className="col-8 mb-1">
                        <label>Posición:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="phoneNumber"
                            onChange={(e) => handleChange(e)}
                            required
                            value={object ? object.services:''}
                        />
                    </div>
                    <div className="col-4 mb-1">
                        <label>Ranking:</label>
                        <select class="custom-select" name="ranking">
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                        </select>
                    </div>
                    <div className="col-6 mb-1">
                        <label>Celular:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="celular"
                            onChange={(e) => handleChange(e)}
                            required
                            value={object ? object.services:''}
                        />
                    </div>
                    <div className="col-6 mb-1">
                        <label>Teléfono línea:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="phoneNumber"
                            onChange={(e) => handleChange(e)}
                            required
                            value={object ? object.services:''}
                        />
                    </div>
                    <div className="col-6 mb-1">
                        <label>Email Laboral:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="mail"
                            onChange={(e) => handleChange(e)}
                            required
                            value={object ? object.services:''}
                        />
                    </div>
                    <div className="col-6 mb-1">
                        <label>Email Personal:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="mail"
                            onChange={(e) => handleChange(e)}
                            required
                            value={object ? object.services:''}
                        />
                    </div>
                    <div className="col-4 mb-1">
                        <label>Mensajería:</label>
                        <select class="custom-select" name="mensajeria">
                        <option value="1">Skype</option>
                        <option value="2">Whatsapp</option>
                        <option value="3">LinkedIn</option>
                        </select>
                    </div>
                    <div className="col-8">
                        <label>Usuario:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="messagingAppUser"
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


ModalContacts.propTypes = {
    onDismiss: PropTypes.func.isRequired,
    message: PropTypes.string,
    onAccept: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.element,
    large: PropTypes.bool
};

ModalContacts.defaultProps = {
    title: 'Confirme Acción',
    message: null,
    children: null,
    onAccept: null,
    large: false
};

export default ModalContacts;
