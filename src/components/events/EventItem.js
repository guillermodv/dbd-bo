import React, {Fragment} from 'react';
import {find} from 'lodash';
import {ACCOUNTS, NOTES, CONTACTS, ADDRESSES, EVENTS, } from "../../const";
import {Link} from "react-router-dom";
import {ShowIconWithLabel} from "../commons";
import AccountSimpleData from "../accounts/AccountSimpleData";
import EventData from "./EventData";
import GenericsTable from "../commons/GeneticsTable";

const EventItem = (props) => {
    const id = props.match.params.id;
    const account = find(ACCOUNTS, a => a._id === id);
    const event = find(EVENTS, a => a._id === id);
    return (
        <Fragment>
            <div className="row mt-1">
                    <div className="col-sm-6 py-1">
                        <h5> {account.name}</h5>
                    </div>
                    <div className="col-sm-6 text-right">
                        <Link to="/events" className="btn btn-secondary">
                            <ShowIconWithLabel label={"Volver Al Listado"} type={"fas fa-arrow-circle-left"}/>
                        </Link>
                        &nbsp;
                        <Link to={`/account/edit/${account._id}`} className="btn btn-primary">
                            <ShowIconWithLabel label={"Editar Cuenta"} type={"fas fa-pencil-alt"}/>
                        </Link>
                    </div>
            </div>
            <hr className="mx-1 w-100"/>
            <AccountSimpleData account={account}/>
            &nbsp;
            <EventData event={event}/>
            <br/>
            <div id="accordion">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Notas
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse collapsed" aria-labelledby="headingOne"
                         data-parent="#accordion">
                        <div className="card-body">
                            <GenericsTable items={NOTES} showDate={true}/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Direcciones
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            <GenericsTable items={ADDRESSES}/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Contactos
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                         data-parent="#accordion">
                        <div className="card-body">
                            <GenericsTable items={CONTACTS}/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EventItem;