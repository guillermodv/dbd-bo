import React, {useState} from 'react';
import {ModalNew, Pagination, ShowIcon, Showing} from "../commons";

const GenericsTable = ({items = [], showDate = false , showId = true, showPagination = false, showTools = true, showUser = false, title = "Crear", description= ""}) => {
    const [showModal, setShowModal] = useState(false);
    const [item, setItem] = useState({});

    const handleEdit = (item) => {
        setItem(item);
        setShowModal(true);
    };

    return(
        <div className="mx-2">
            {showModal && (
                <ModalNew
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
                    <th className="text-left">Descripción</th>
                    {showDate && <th className="text-left">Fecha de Creación</th>}
                    {showUser && <th className="text-left">User</th>}
                    {showTools && <th className="text-center"> </th>}
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item._id}>
                        {showId && <td className="text-left">{item._id}</td>}
                        <td className="text-left">{item.name}</td>
                        <td className="text-left">{item.description}</td>
                        {showDate && <td className="text-left">{item.date}</td>}
                        {showUser && <td className="text-left">{item.user}</td>}
                        {showTools && <td className="text-center">
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => handleEdit(item)}
                            >
                                <ShowIcon type={"fas fa-pen"}/>
                            </button>
                        </td>}
                    </tr>
                ))}
                </tbody>
            </table>
            {showPagination && <Pagination/>}
            {showPagination && <Showing items={items}/>}
        </div>
    );
};

export default GenericsTable;