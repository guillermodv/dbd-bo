import React, {useState} from 'react';
import {Pagination, ModalContacts, ShowIcon, Showing} from "../commons";

const ContactsTable = ({items = [], showDate = false , showId = true, showPagination = false, showTools = true, showUser = false, title = "Crear", description= ""}) => {
    const [showModal, setShowModal] = useState(false);
    const [item, setItem] = useState({});

    const handleEdit = (item) => {
        setItem(item);
        setShowModal(true);
    };

    return(
        <div className="mx-2">
            {showModal && (
                <ModalContacts
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
                    <th className="text-left">Nombre</th>
                    <th className="text-left">Apellido</th>
                    <th className="text-left">Posición</th>
                    <th className="text-left">Ranking</th>
                    <th className="text-left">Celular</th>
                    <th className="text-left">Teléfono línea</th>
                    <th className="text-left">Email Laboral</th>
                    <th className="text-left">Email Personal</th>
                    <th className="text-left">Mensajería</th>
                    <th className="text-left">Usuario</th>
                    <th className="text-left"> </th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item._id}>
                        {showId && <td className="text-left">{item._id}</td>}
                        <td className="text-left">{item.name}</td>
                        <td className="text-left">{item.surname}</td>
                        <td className="text-left">{item.position}</td>
                        <td className="text-left">{item.ranking}</td>
                        <td className="text-left">{item.celular}</td>
                        <td className="text-left">{item.phoneNumber}</td>
                        <td className="text-left">{item.mailwork}</td>
                        <td className="text-left">{item.mailpersonal}</td>
                        <td className="text-left">{item.mensajeria}</td>
                        <td className="text-left">{item.messagingAppUser}</td>
                        <td className="text-left">
                            <button
                                type="button"
                                className="btn btn-warning" title="Editar Contacto"
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
