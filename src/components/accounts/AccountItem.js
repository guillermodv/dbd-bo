import React, {useState, useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {
    NOTES,
    CONTACTS,
    ADDRESSES,
    EVENTS,
    OPPORTUNITIES,
    SERVICES
} from "../../const";

import {
    ShowIconWithLabel,
    NotesTable,
    ModalNotes,
    ModalAddress,
    ModalContacts,
    ModalEvents,
    ModalOportunities,
    ModalServices,
    AddressTable,
    EventsTable,
    OportunitiesTable,
    ContactsTable,
    ServicesTable
} from "../commons";
import {requestAccount, requestRemoveAccount} from "../../actions/accounts";

const AccountItem = (props) => {
    const dispatch = useDispatch();
    const account = useSelector(state => state.accounts.account);
    const [showModalNotes, setShowModalNotes] = useState(false);
    const [showModalAddress, setShowModalAddress] = useState(false);
    const [showModalContacts, setShowModalContacts] = useState(false);
    const [showModalEvents, setShowModalEvents] = useState(false);
    const [showModalOportunities, setShowModalOportunities] = useState(false);
    const [showModalServices, setShowModalServices] = useState(false);

    useEffect(() => {
        dispatch(requestAccount(props.match.params.id));
    }, [props.match.params.id, dispatch]);

    function handleRemove() {
        if (window.confirm('¿Desea Borrar?, Perderá los datos asociados.')){
            dispatch(requestRemoveAccount(account._id));
            return props.history.push('/accounts');
        }
    }

    return (
        <Fragment>
            {account && <Fragment>
                <div class="mx-2">
                    <br></br>
                    <div class="mx-2">
                        <h1 class="display-9">{account.name}</h1>
                        <h5>
                            <span class="badge badge-danger">Estado:&nbsp;{account.state}</span>&nbsp;
                            <span class="badge badge-success">Potencial:&nbsp;{account.potential}</span>&nbsp;
                            <span class="badge badge-warning">Ranking:&nbsp;{account.ranking}</span>&nbsp;
                            <span class="badge badge-link">Tipo:&nbsp;{account.type}</span>&nbsp;
                        </h5>
                        <p class="lead">{account.description}</p>
                        <hr class=""></hr>
                        <div class="row">
                            <div class="col-sm-6">
                                <span>Razón Social:&nbsp;<span className="font-weight-bold">{account.socialName}</span>&nbsp;(CUIT&nbsp;{account.cuit})</span> &nbsp;
                                <span>-&nbsp;Industria:&nbsp;<span className="font-weight-bold">{account.industry}</span></span>
                            </div>
                            <div class="col-sm-6" align="right">
                                <Link to="/accounts" className="btn btn-secondary">
                                    <ShowIconWithLabel label={"Volver Al Listado"} type={"fas fa-arrow-circle-left"}/>
                                </Link>
                                &nbsp;
                                <Link to={`/account/edit/${account._id}`} className="btn btn-primary">
                                    <ShowIconWithLabel label={"Editar Cuenta"} type={"fas fa-search-alt"}/>
                                </Link>
                                &nbsp;
                                <button type="button" className="btn btn-danger" onClick={() => handleRemove()}>
                                    <ShowIconWithLabel label="Borrar" type="fas fa-trash-alt"/>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
            </Fragment>}

            <ul class="nav nav-tabs mx-1">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#notes">Notas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#events">Eventos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#opportunities">Oportunidades</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#services">Servicios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#contacts">Contactos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#address">Direcciones</a>
                </li>
            </ul>
            
            <div id="tabs" class="tab-content">
                <br/>
                <div class="tab-pane fade show active mx-3" id="notes">
                    <Fragment>
                        {showModalNotes && (
                            <ModalNotes
                                onAccept={() => setShowModalNotes(false)}
                                onDismiss={() => setShowModalNotes(false)}
                                title={"Crear Nueva Nota"}
                            />
                        )}
                        <div className="col-12 text-right my-1">
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => setShowModalNotes(true)}
                            >
                                <ShowIconWithLabel label="Nueva Nota" type="fas fa-plus"/>
                            </button>
                        </div>
                        <NotesTable
                            items={NOTES}
                            showId={false}
                            showDate={true}
                            showTools
                        />
                        </Fragment>
                </div>

                <div class="tab-pane fade active mx-3" id="events">
                    <Fragment>
                        {showModalEvents && (
                            <ModalEvents
                                onAccept={() => setShowModalEvents(false)}
                                onDismiss={() => setShowModalEvents(false)}
                                title={"Crear Nuevo Evento"}
                            />
                        )}
                        <div className="col-12 text-right my-1">
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => setShowModalEvents(true)}
                            >
                                <ShowIconWithLabel label="Nuevo Evento" type="fas fa-plus"/>
                            </button>
                        </div>
                        <EventsTable
                            items={EVENTS}
                            showId={false}
                            showPagination={false}
                            showUser={true}
                            showDate={true}
                            title="Editar Evento"
                            description=""
                        />
                        </Fragment>
                </div>

                <div class="tab-pane fade active mx-3" id="opportunities">
                    <Fragment>
                        {showModalOportunities && (
                            <ModalOportunities
                                onAccept={() => setShowModalOportunities(false)}
                                onDismiss={() => setShowModalOportunities(false)}
                                title={"Crear Nueva Oportunidad"}
                            />
                        )}
                        <div className="col-12 text-right my-1">
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => setShowModalOportunities(true)}
                            >
                                <ShowIconWithLabel label="Nueva Oportunidad" type="fas fa-plus"/>
                            </button>
                        </div>
                        <OportunitiesTable
                            items={OPPORTUNITIES}
                            showId={false}
                            showPagination={false}
                            showUser
                            showDate
                            title="Editar Oportunidad"
                        />
                    </Fragment>
                </div>

                <div class="tab-pane fade active mx-3" id="services">
                    <Fragment>
                        {showModalServices && (
                            <ModalServices
                                onAccept={() => setShowModalServices(false)}
                                onDismiss={() => setShowModalServices(false)}
                                title={"Crear Nuevo Servicio"}
                            />
                        )}
                        <div className="col-12 text-right my-1">
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => setShowModalServices(true)}
                            >
                                <ShowIconWithLabel label="Nuevo Servicio" type="fas fa-plus"/>
                            </button>
                        </div>
                        <ServicesTable
                            items={SERVICES}
                            showId={false}
                            showPagination={false}
                            title="Editar Servicio"
                        />
                        </Fragment>
                </div>

                <div class="tab-pane fade active mx-3" id="contacts">
                    <Fragment>
                        {showModalContacts && (
                            <ModalContacts
                                onAccept={() => setShowModalContacts(false)}
                                onDismiss={() => setShowModalContacts(false)}
                                title={"Crear Nuevo Contacto"}
                            />
                        )}
                        <div className="col-12 text-right my-1">
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => setShowModalContacts(true)}
                            >
                                <ShowIconWithLabel label="Nuevo Contacto" type="fas fa-plus"/>
                            </button>
                        </div>
                        <ContactsTable
                            items={CONTACTS}
                            showId={false}
                            showDate={false}
                            title="Editar Contacto"
                        />
                    </Fragment>
                </div>

                <div class="tab-pane fade active mx-3" id="address">
                    <Fragment>
                        {showModalAddress && (
                            <ModalAddress
                                onAccept={() => setShowModalAddress(false)}
                                onDismiss={() => setShowModalAddress(false)}
                                title={"Ingrese Nueva Dirección"}
                            />
                        )}
                        <div className="col-12 text-right my-1">
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => setShowModalAddress(true)}
                            >
                                <ShowIconWithLabel label="Nuevo Dirección" type="fas fa-plus"/>
                            </button>
                        </div>
                        <AddressTable
                            items={ADDRESSES}
                            showId={false}
                            showPagination={false}
                            title="Editar Dirección"
                        />
                    </Fragment>
                </div>
            </div>
        </Fragment>
    );
};
export default AccountItem;
