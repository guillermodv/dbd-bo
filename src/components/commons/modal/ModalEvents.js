import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import {ModalButtonFooter} from "../../commons/index";


const ModalEvents = ({item, title, onAccept, onDismiss, description, large}) => {
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
                    <div className="col-12 mb-1">
                        <label>Descripción:</label>
                        <textarea class = "form-control" rows = "3" placeholder = ""></textarea>
                    </div>

                    <div className="col-5 mb-1">
                        <label>Tipo:</label>
                        <select class="custom-select" name="tipo">
                        <option value="1">Llamada</option>
                        <option value="2">Reunión</option>
                        <option value="3">Tarea</option>
                        </select>
                    </div>

                    <div className="col-7 mb-1">
                        <label>Responsable:</label>
                            <select class="custom-select" name="tipo">
                            <option value="1"></option>
                            </select>
                    </div>

                    <div className="col-5 mb-1">
                        <label>Fecha:</label>
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            onChange={(e) => handleChange(e)}
                            required
                            value={object ? object.date:''}
                        />
                    </div>

                    <div className="col-3 mb-1">
                        <label>Hora:</label>
                        <input type="time"
                               min="00:00"
                               max="24:00"
                               className="form-control"
                               name="date"
                               onChange={(e) => handleChange(e)}
                               required
                               value={object ? object.date:''}
                        />
                    </div>

                    <div className="col-4 mb-1">
                        <label>Estado:</label>
                        <select class="custom-select" name="tipo">
                        <option value="1">Completada</option>
                        <option value="2">Pendiente</option>
                        <option value="3">En Proceso</option>
                        </select>
                    </div>
                </div>
                
            </ModalBody>
            <ModalFooter>
                <ModalButtonFooter onAccept={onAccept} onDismiss={onDismiss} />
            </ModalFooter>
        </Modal>
    )
};


ModalEvents.propTypes = {
    onDismiss: PropTypes.func.isRequired,
    message: PropTypes.string,
    onAccept: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.element,
    large: PropTypes.bool
};

ModalEvents.defaultProps = {
    title: 'Confirme Acción',
    message: null,
    children: null,
    onAccept: null,
    large: false
};

export default ModalEvents;
