import React, {useState} from 'react';
import {ModalOportunities, Pagination, ShowIcon, Showing} from "../commons";

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
                <ModalOportunities
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
                    <th className="text-left">Unidad</th>
                    <th className="text-left">Servicio</th>
                    <th className="text-left">Descripción</th>
                    <th className="text-left">Potencial</th>
                    <th className="text-left">Moneda</th>
                    <th className="text-left">Monto</th>
                    <th className="text-left">Estado</th>
                    <th className="text-left">Comercial</th>
                    <th className="text-left"> </th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item._id}>
                        {showId && <td className="text-left">{item._id}</td>}
                        <td className="text-left">{item.businessUnit}</td>
                        <td className="text-left">{item.service}</td>
                        <td className="text-left">{item.description}</td>
                        <td className="text-left">{item.potential}</td>
                        <td className="text-left">{item.currency}</td>
                        <td className="text-left">{item.amount}</td>
                        <td className="text-left">{item.state}</td>
                        <td className="text-left">{item.comercial}</td>
                        <td className="text-left">
                            <button
                                type="button"
                                className="btn btn-warning" title="Editar Oportunidades"
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
