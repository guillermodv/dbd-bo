import React, {useState, useEffect, Fragment} from 'react';
import {isEmpty} from 'lodash';
import {useDispatch, useSelector} from 'react-redux';

import {LoadingIndicator, Message, ModalAccounts, TitleWithButton, ShowIcon} from "../commons";
import {requestAccounts} from "../../actions/accounts";
import AccountTable from "./AccountTable";

const AccountsList = () => {
    const dispatch = useDispatch();
    const {accounts, status, loading} = useSelector(state => state.accounts);
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(true);
    const [item, setItem] = useState({});

    useEffect(() => {
        dispatch(requestAccounts());
        window.setTimeout(()=> setShow(false),2000);
    }, [dispatch]);

    return (
        <Fragment>
            <div class="mx-2">
                <br></br>
                <div class="mx-2 row">
                    <div class="col-sm-6">           
                        <h1 class="display-9">Administración de Cuentas</h1>
                    </div>
                    <div class="col-sm-6">
                        <h1>
                            <div className="mt-2 mb-1 mx-1 text-right">
                                <TitleWithButton label="" buttonLabel="Nueva Cuenta"/>
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => setShowModal(true)}
                                >
                                    <ShowIcon type={"fas fa-plus"}/>
                                    &nbsp;
                                    Agregar Cuenta
                                </button>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
            {loading && <LoadingIndicator/>}
            {showModal && (
                <ModalAccounts
                    item={item}
                    onAccept={() => setShowModal(false)}
                    onDismiss={() => setShowModal(false)}
                    title="Nueva/Editar Cuenta"
                    description=""
                />
            )}
            {!loading && !isEmpty(accounts) && (<AccountTable accounts={accounts}/>)}
            {show && status && <Message label={status}/> }
        </Fragment>
    );
};

export default AccountsList;

