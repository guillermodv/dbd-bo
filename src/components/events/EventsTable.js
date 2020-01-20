import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {Pagination, ShowIcon, Showing} from "../commons";

const EventsTable = ({items = [], showPagination = true}) => (
    <Fragment>
        <table className="table table-striped mt-1 align-content-center" style={{'font-size': '14px'}}>
            <thead className="text-light bg-primary">
            <tr>
                <th className="text-left">Descripción</th>
                <th className="text-left">Tipo</th>
                <th className="text-center">Estado</th>
                <th className="text-left">Usuario</th>
                <th className="text-center">Fecha</th>
                <th className="text-center">Herramientas</th>
            </tr>
            </thead>
            <tbody>
            {items.map(item => (
                <tr key={item._id}>
                    <td className="text-left">{item.description}</td>
                    <td className="text-left">
                        <span className="badge badge-pill badge-primary">{item.type}</span>
                    </td>
                    <td className="text-center font-weight-bold">
                        <span className="badge badge-pill badge-primary">{item.flow}</span>
                    </td>
                    <td className="text-left">{item.responsable}</td>
                    <td className="text-center">{item.date}</td>
                    <td className="text-center">
                        <Link
                            to={`/event/show/${item._id}`}
                            className="btn btn-success"
                        >
                            <ShowIcon type={"fa fa-search"}/>
                        </Link>
                        &nbsp;
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => alert('¿desear borrar?')}
                        >
                            <ShowIcon type={"fas fa-trash-alt"} />
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        {showPagination && <Pagination/>}
        {showPagination &&<Showing items={items}/>}
    </Fragment>
);

export default EventsTable;