import React, {useState} from 'react';
import {ModalEvents, Pagination, ShowIcon, Showing} from "../commons";

const ContactsTable = ({items = [], showDate = false , showId = true, showPagination = false, showTools = true, showUser = false, title = "Crear", description= "Ingrese un item"}) => {
    const [showModal, setShowModal] = useState(false);
    const [item, setItem] = useState({});

    const handleEdit = (item) => {
        setItem(item);
        setShowModal(true);
    };

    return(
        <div className="mx-2">
            {showModal && (
                <ModalEvents
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
                    <th className="text-left">Descripción</th>
                    <th className="text-left">Tipo</th>
                    <th className="text-left">Responsable</th>
                    <th className="text-left">Fecha</th>
                    <th className="text-left">Hora</th>
                    <th className="text-left">Estado</th>
                    <th className="text-left"> </th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item._id}>
                        {showId && <td className="text-left">{item._id}</td>}
                        <td className="text-left">{item.description}</td>
                        <td className="text-left">{item.type}</td>
                        <td className="text-left">{item.responsable}</td>
                        <td className="text-left">{item.date}</td>
                        <td className="text-left">{item.time}</td>
                        <td className="text-left">{item.flow}</td>
                        <td className="text-left">
                            <button
                                type="button"
                                className="btn btn-warning" title="Editar Evento"
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

export default ContactsTable;
