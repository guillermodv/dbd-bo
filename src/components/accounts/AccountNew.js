import React, {useState, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {isEmpty, find} from 'lodash';
import {cuit} from 'arg.js';

import {LoadingIndicator, Error, ShowIconWithLabel} from "../commons";
import {requestSaveAccount} from "../../actions/accounts";
import {accountSchema, friendlyMessage} from "../../schema/account";
import AccountForm from "./AccountForm";

const AccountNew = (props) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.accounts.loading);
    const [account, setAccount] = useState( {potential: "1",ranking: "1", state: "1", type: "1"});
    const [error, setError] = useState('');

    const handleChange = ({target: {name, value}}) => {
        if (!isEmpty(account.cuit) && name === 'cuit') {
            if (!isNaN(value)){
                setAccount({...account, [name]: value});
            }
            !cuit.isValid(value) ? setError('Formato CUIT inválido') : setError('');
        } else {
            setAccount({...account, [name]: value});
        }
    };

    async function handleSubmit() {
        const valid = await accountSchema.isValid({
            name: account.name,
            socialName: account.socialName,
            industry: account.industry,
            service: account.service,
            cuit: account.cuit
        });
        if(!valid) {
            accountSchema.validate({
                name: account.name,
                socialName: account.socialName,
                industry: account.industry,
                service: account.service,
                cuit: account.cuit
            }).catch(function({errors, path}) {
                setError(`${find(friendlyMessage, f=> f.id === path).description}: ${errors}`);
            });
        } else {
            setError('');
            dispatch(requestSaveAccount(account));
            return props.history.push('/accounts');
        }
    }

    function handleCancel() {
        setError('');
        return props.history.push('/accounts');
    }

    return(
        <Fragment>
            <div class="mx-2">
                <br></br>
                <div class="mx-2 row">
                    <div class="col-sm-6">           
                        <h1 class="display-9">Nueva Cuenta</h1>
                    </div>
                </div>
            </div>
            {loading && <LoadingIndicator/>}
            {(error !== '') && <Error label={error} />}
            {!loading && account && <AccountForm account={account} handleChange={handleChange}/>}
            <div className="text-right mx-4">
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => handleSubmit()}
                >
                    <ShowIconWithLabel label="Aceptar" type="fas fa-plus"/>
                </button>
                &nbsp;
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleCancel()}
                >
                    <ShowIconWithLabel label="Cancelar" type="fas fa-minus"/>
                </button>
            </div>
        </Fragment>
    );
};

export default AccountNew;


