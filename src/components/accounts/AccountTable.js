import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Pagination, ShowIcon, Showing} from "../commons";
import {map} from "lodash";

const AccountTable = ({accounts = []}) => (
    <Fragment>
        <table className="table table-hover">
            <thead className="text-light bg-primary">
            <tr>
                <th>Cuenta</th>
                <th className="text-center">Ranking</th>
                <th className="text-center">Potencial</th>
                <th className="text-left">Estado</th>
                <th className="text-center">Tipo</th>
                <th className="text-center">Oportunidades</th>
                <th className="text-center">Contactos</th>
                <th className="text-center">Notas</th>
                <th className="text-center">Eventos</th>
                <th>Servicio</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {accounts.map(account => (
                <tr key={account._id}>
                    <td className="text-left">{account.name}</td>
                    <td className="text-center">{account.ranking}</td>
                    <td className="text-center">{account.potential}</td>
                    <td className="text-left">{account.state}</td>
                    <td className="text-center">{account.type}</td>
                    <td className="text-center">{account.opportunities}</td>
                    <td className="text-center">{account.contacts}</td>
                    <td className="text-center">{account.notes}</td>
                    <td className="text-center">{account.events}</td>
                    <td>{map(account.service.split("|"), service => (
                        <span className="badge badge-warning">
                            {service}
                        </span>
                    ))}
                    </td>
                    <td className="text-right">
                        <Link
                            to={`/account/show/${account._id}`}
                            className="btn btn-success"
                        >
                            <ShowIcon type={"fa fa-search"}/>
                        </Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        <Pagination/>
        <Showing items={accounts}/>
    </Fragment>
);

export default AccountTable;
