import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {find, isEmpty} from "lodash";
import {ACCOUNTS, FLOW, POTENTIAL, RANKING} from "../../const";
import {ShowIcon, ShowIconWithLabel} from "../commons";
import SelectWithLabel from "../commons/SelectWithLabel";
import moment from "moment";

const EventEdit = (props) => {
    const id = props.match.params.id;
    const accountItem = find(ACCOUNTS, a => a._id === id);
    const [ account, setAccount ] = useState(!isEmpty(id) ? accountItem : {});

    const handleChange = ({target: {name, value}}) => {
        setAccount({...account, [name]: value});
    };

    const handleSubmit = () => {
        return props.history.push('/accounts');
    };

    return(
        <Fragment>
            <div className="row col-12 mt-2 style={{'font-size': '14px'}}">
                    <div className={"col-sm-6 text-left"}>
                        <h4><ShowIcon type={"fas fa-pen"}/> {isEmpty(id) ? ' Nueva Cuenta' : ' Editar Cuenta'}.</h4>
                    </div>
                    <div className={"col-6 text-right"}>
                        <Link to="/" className="btn btn-secondary">
                            <ShowIconWithLabel label={"Volver a Cuentas"} type={"fas fa-arrow-circle-left2"}/>
                        </Link>
                    </div>
            </div>
            <div className="col-12 mt-2" style={{'font-size': '14px'}}>
                <div>
                    <form>
                        <div className="row form-group">
                            <label>Cuenta:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Nombre de la Cuenta"
                                required
                                value={account.name}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div className="row col-12">
                            <div className="row col-6 align-content-center">
                                <div className="form-group">
                                    <label>Ranking:</label>
                                    <SelectWithLabel defaultLabel={"Ingrese Ranking"} items={RANKING} />
                                </div>

                                <div className="form-group">
                                    <label>Potencial:</label>
                                    <SelectWithLabel defaultLabel={"Ingrese Potencial"} items={POTENTIAL} />
                                </div>

                                <div className="form-group">
                                    <label>Tipo:</label>
                                    <SelectWithLabel defaultLabel={"Ingrese Tipo"} items={FLOW} />
                                </div>
                            </div>
                            <div className="row col-6 align-content-center">
                                <div className="form-group">
                                    <label>Creado:</label>
                                    <input type="date" name="creationDate"
                                           max="3000-12-31"
                                           min="1000-01-01"
                                           value={moment(new Date().toDateString(), "yyyy-MM-dd")}
                                           onChange={e => handleChange(e)}
                                           className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Modificado:</label>
                                    <input type="date"
                                           name="ModificationDate"
                                           value={moment(new Date().toDateString(), "yyyy-MM-dd")}
                                           max="3000-12-31"
                                           min="1000-01-01"
                                           className="form-control"
                                           onChange={e => handleChange(e)}/>
                                </div>
                            </div>
                        </div>
                        <div className="row form-group">
                            <label>Servicio:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="service"
                                placeholder="Servicio"
                                required
                                value={account.service}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div className="row form-group">
                            <label>Industria:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="industry"
                                placeholder="Industria"
                                required
                                value={account.industry}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div className="row form-group">
                            <label>Razon Social:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="socialName"
                                placeholder="Razon Social"
                                required
                                value={account.socialName}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <input type="submit" value="Agregar Cuenta" onClick={() => handleSubmit()} className="btn btn-success"/>
                        <br/>
                        <br/>
                        <br/>
                    </form>
                </div>
            </div>
         </Fragment>
    );
};

export default EventEdit;


