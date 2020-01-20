import React, {useState} from 'react';
import {ModalServices, Pagination, ShowIcon, Showing} from "../commons";

const OportunitiesTable = ({items = [], showDate = false , showId = true, showPagination = false, showTools = true, showUser = false, title = "Crear", description= ""}) => {
    const [showModal, setShowModal] = useState(false);
    const [item, setItem] = useState({});

    const handleEdit = (item) => {
        setItem(item);
        setShowModal(true);
    };

    return(
        <div className="mx-2">
            {showModal && (
                <ModalServices
                    item={item}
                    onAccept={() => setShowModal(false)}
                    onDismiss={() => setShowModal(false)}
                    title={title}
                    description={description}
                />
            )}
            <table className="table table-striped align-content-center border-bottom" style={{'font-size': '14px'}}>
                <thead className="text-light bg-primary">
                <tr>
                    {showId && <th className="text-left">Id</th>}
                    <th className="text-left">Unidad De Negocio</th>
                    <th className="text-left">Servicios</th>
                    <th className="text-left">Definición</th>
                    <th className="text-left"> </th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item._id}>
                        {showId && <td className="text-left">{item._id}</td>}
                        <td className="text-left">{item.businessUnit}</td>
                        <td className="text-left">{item.services}</td>
                        <td className="text-left">{item.definition}</td>
                        <td className="text-left">
                            <button
                                type="button"
                                className="btn btn-warning" title="Editar Servicio"
                                onClick={() => handleEdit(item)}
                            >
                                <ShowIcon type={"fas fa-pen"}/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showPagination && <Pagination/>}
            {showPagination && <Showing items={items}/>}
        </div>
    );
};

export default OportunitiesTable;
