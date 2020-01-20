import React, {useState} from 'react';
import {ModalNotes, Pagination, ShowIcon, Showing} from "../commons";

const NotesTable = ({items = [], showDate = false , showId = true, showPagination = false, showTools = true}) => {
    const [showModal, setShowModal] = useState(false);
    const [item, setItem] = useState({});

    const handleEdit = (item) => {
        setItem(item);
        setShowModal(true);
    };
    return(
        <div className="mx-2">
            {showModal && (
                <ModalNotes
                    item={item}
                    onAccept={() => setShowModal(false)}
                    onDismiss={() => setShowModal(false)}
                    title={"Editar Nota"}
                    description={""}
                />
            )}
            <table className="table table-striped align-content-center border-bottom" style={{'font-size': '14px'}}>
                <thead className="text-light bg-primary">
                <tr>
                    {showId && <th className="text-left">Id</th>}
                    <th className="text-left">Titulo</th>
                    <th className="text-left">Nota</th>
                    <th className="text-left">Fecha de Creación</th>
                    <th className="text-left">Usuario</th>
                    <th className="text-left">Adjuntos</th>
                    <th className="text-left"> </th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item._id}>
                        {showId && <td className="text-left">{item._id}</td>}
                        <td className="text-left">{item.name}</td>
                        <td className="text-left">{item.description}</td>
                        <td className="text-left">{item.date}</td>
                        <td className="text-left">{item.user}</td>
                        <td className="text-left font-weight-bold"><ShowIcon type={"fas fa-save"}/> 2</td>
                        <td className="text-left">
                            <button
                                type="button"
                                className="btn btn-warning" title="Editar Nota"
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
    )
};

export default NotesTable;
