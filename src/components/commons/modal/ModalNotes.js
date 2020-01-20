import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Files from 'react-files'
import {
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import {Error, ModalButtonFooter} from "../../commons/index";
import {isEmpty} from "lodash";

const ModalNotes = ({item, title, onAccept, onDismiss, description, large}) => {
    const [object, setObject] = useState(item);
    const [error, setError] = useState('');
    const [files, setFiles] = useState('');

    const handleChange = ({target: {name, value}}) => {
        setObject({...object, [name]: value});
    };

    const onFilesChange = (file) => {
        if(!isEmpty(file)){
            setError('');
            setFiles(files + file[0].name);
        }
    };

    const onFilesError = (fileError) => {
        setError(`Error ${fileError.message}`);
    };

    return (
        <Modal isOpen onHide={onDismiss} bsSize={large ? 'large' : ''}>
            <ModalHeader closeButton>
                {title}
            </ModalHeader>
            <ModalBody>
                {description}
                {(error !== '') && <Error label={error}/>}
                <div className="row form-group">
                    <div className="col-12 mb-1">
                        <label>Título:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="name"
                            onChange={(e) => handleChange(e)}
                            required
                            value=''
                        />
                    </div>

                    <div className="col-12 mb-1">
                        <label>Descripción:</label>
                        <textarea class = "form-control" rows = "3" placeholder = "" ></textarea>
                    </div>

                    <div className="col-5 mb-1">
                        <label>Fecha de Creación:</label>
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            onChange={(e) => handleChange(e)}
                            required
                            value={object ? object.date:''}
                        />
                    </div>

                    <div className="col-7 mb-1">
                        <label>Usuario:</label>
                        <input
                            type="string"
                            className="form-control"
                            name="user"
                            onChange={(e) => handleChange(e)}
                            required
                            value=''
                        />
                    </div>
                </div>   

                    <div className="col-12 mb-1">
                    <label>Adjuntos:</label>
                        <div className="text-center border-top border-bottom">
                            &nbsp;
                            <Files
                            className='files-dropzone'
                            onChange={(item) => onFilesChange(item)}
                            onError={(item) => onFilesError(item)}
                            accepts={['.pdf', '.doc', '.xls', '.csv']}
                            multiple={false}
                            maxFiles={3}
                            maxFileSize={10000000}
                            minFileSize={0}
                            clickable
                        >
                            <h5>Arrastre aquí o click para subir Archivo.</h5>
                            <input type="file" name="adjunto" accept=".pdf,.jpg,.png,.doc,.xls" multiple></input>
                            </Files>
                            &nbsp;
                        </div>
                        &nbsp;
                        {!isEmpty(files) && <h5 className="text-center">{files}</h5>}
                    </div>


            </ModalBody>
            <ModalFooter>
                <ModalButtonFooter onAccept={onAccept} onDismiss={onDismiss} />
            </ModalFooter>
        </Modal>
    )
};


ModalNotes.propTypes = {
    onDismiss: PropTypes.func.isRequired,
    message: PropTypes.string,
    onAccept: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.element,
    large: PropTypes.bool
};

ModalNotes.defaultProps = {
    title: 'Confirme Acción',
    message: null,
    children: null,
    onAccept: null,
    large: false
};

export default ModalNotes;
