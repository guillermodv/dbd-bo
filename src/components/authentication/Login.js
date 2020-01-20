import React, {useState, useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {capitalize} from 'lodash';

import Error from "../commons/Error";
import {requestStaticData} from "../../actions/staticData";
import {requestValidateSession} from "../../actions/session";
import loginSchema from "../../schema/login";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let {profile, loading} = useSelector(state => state.session);

    const redirect = path => history.push(path);
    const handleAuth = auth => dispatch(requestValidateSession(auth));

    useEffect(() => {
        dispatch(requestStaticData());
    }, [dispatch, profile, loading]);

    const [auth, setAuth] = useState({});
    const [error, setError] = useState('');

    const handleChange = ({target: {name, value}}) => (
        setAuth({...auth, [name]: value})
    );

    async function handleSubmit(e) {
        e.preventDefault();
        const valid = await loginSchema.isValid({email: auth.email, password: auth.password});
        if(!valid) {
            loginSchema.validate({email: auth.email, password: auth.password}).catch(function({errors, path}) {
                setError(`${capitalize(path)}: ${errors}`);
            });
        } else {
            setError("");
            handleAuth(auth);
            window.location = '/'
        }
    }

    return(
        <Fragment>
            {profile && redirect('/accounts')}
            &nbsp;
            <div className="row justify-content-center border-1">
                <img src="../../../../logoLogin.png" alt={"..."}/>
            </div>
            <div className="row justify-content-center border-1">
                <div className="rom">
                    <div className="card mt-5">
                        <div className="card-body">
                            <form onSubmit={() => handleSubmit(auth)}>
                                <div className="form-group">
                                    <input
                                        type="input"
                                        className="form-control"
                                        name="email"
                                        placeholder="email"
                                        required
                                        value={auth.email}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="password"
                                        required
                                        value={auth.password}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-success btn-block"
                                    onClick={(e) => handleSubmit(e)}
                                    value="Iniciar Sesión"
                                />
                            </form>
                            {!(error === '') && !loading && <Error label={error} />}
                        </div>
                        <p className="font-weight-bold text-center">¿Olvidaste tu contraseña?</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;