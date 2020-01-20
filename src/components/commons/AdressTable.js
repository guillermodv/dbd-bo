import React, {useState} from 'react';
import {ModalAddress, Pagination, ShowIcon, Showing} from "../commons";

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
                <ModalAddress
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
                    <th className="text-left">Tipo</th>
                    <th className="text-left">Nombre</th>
                    <th className="text-left">Dirección</th>
                    <th className="text-left">País</th>
                    <th className="text-left">Provincia/Estado</th>
                    <th className="text-left">Ciudad</th>
                    <th className="text-left">Código Postal</th>
                    <th className="text-left"> </th>
                    
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item._id}>
                        {showId && <td className="text-left">{item._id}</td>}
                        <td className="text-left">{item.type}</td>
                        <td className="text-left">{item.name}</td>
                        <td className="text-left">{item.address}</td>
                        <td className="text-left">{item.country}</td> 
                        <td className="text-left">{item.state}</td>
                        <td className="text-left">{item.city}</td>
                        <td className="text-left">{item.codpostal}</td>
                        <td className="text-left">
                            <button
                                type="button"
                                className="btn btn-warning" title="Editar Dirección"
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
