import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import {
    Button, Modal, ModalBody, ModalHeader
} from 'reactstrap';
import {noop} from 'lodash';

const ButtonModal = ({
    onSubmit, label, header, params, className, component: Component, ...props
}) => {
    const [modal, setModal] = useState(false);
    const handleSubmit = result => {
        setModal(false);
        onSubmit(result);
    };

    return (
        <Fragment>
            <Button className={className} onClick={() => setModal(true)} {...props}>
                {label}
            </Button>
            {modal && (
                <Modal isOpen={modal} toggle={() => setModal(false)}>
                    {header && <ModalHeader>{header}</ModalHeader>}
                    <ModalBody>
                        <Component
                            onSubmit={result => handleSubmit(result)}
                            onDismiss={() => setModal(false)}
                            params={params}
                        />
                    </ModalBody>
                </Modal>
            )}
        </Fragment>
    );
};


ButtonModal.propTypes = {
    component: PropTypes.elementType.isRequired,
    onSubmit: PropTypes.func,
    header: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({})
    ]),
    className: PropTypes.string,
    params: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
        PropTypes.number,
        PropTypes.func
    ])
};

ButtonModal.defaultProps = {
    label: 'Button modal',
    onSubmit: noop,
    className: 'btn-modal',
    header: null,
    params: null
};

export default ButtonModal;
