import React from 'react';

const EventData = ({event}) => (
    <div className="card">
        <div className="row col-12">
            <div className="col-6">
                <span className="font-weight-bold">
                    Evento:
                </span> {''}
                <span className="font-italic">
                    {event.name}
                </span>
            </div>
            <div className="col-6">
                <span className="font-weight-bold">
                    Descripción:
                </span> {''}
                <span className="font-italic">
                    {event.description}
                </span>
            </div>
        </div>
        <div className="row col-12">
            <div className="col-6">
                <span className="font-weight-bold">
                    Usuario:
                </span> {''}
                <span className="font-italic">
                    {event.user}
                </span>
            </div>
            <div className="col-6">
                <span className="font-weight-bold">
                    Fecha:
                </span> {''}
                <span className="font-italic">
                    {event.date}
                </span>
            </div>
        </div>
    </div>
);

export default EventData;