import React, {Fragment} from 'react';
import {isEmpty} from 'lodash';

import {LoadingIndicator, TitleWithButton} from "../commons";
import {EVENTS} from "../../const"
import EventsTable from "./EventsTable";

const EventList = () => (
    <Fragment>
        <div className="mx-2">
            <br></br>
            <div className="mx-2 row">
                <div className="col-sm-6">
                    <h1 className="display-9">Eventos</h1>
                </div>
                <div className="col-sm-6" align="right">
                    <h1><TitleWithButton label="" buttonLabel="Nuevo Evento"/></h1>
                </div>
            </div>
        </div>
        {isEmpty(EVENTS) && (<LoadingIndicator/>)}
        {!isEmpty(EVENTS) && (<EventsTable items={EVENTS}/>)}
    </Fragment>
);

export default EventList;

