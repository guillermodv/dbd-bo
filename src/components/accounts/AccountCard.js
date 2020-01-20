import React from 'react';

const AccountCard = ({account}) => (
    <div className="card mx-2 mt-2">
        <div className="row col-12">
            <div className="col-3">
                <span>
                    Estado:
                </span> &nbsp;
                <span className="font-weight-bold">{account.state}</span>
            </div>
            <div className="col-3">
                <span>
                    Potencial:
                </span> &nbsp;
                <span className="font-weight-bold">{account.potential}</span>
            </div>
            <div className="col-3">
                <span>
                    Ranking:
                </span> &nbsp;
                <span className="font-weight-bold">{account.ranking}</span>
            </div>
            <div className="col-3">
                <span>
                    Tipo:
                </span> &nbsp;
                <span className="font-weight-bold">{account.type}</span>
            </div>
        </div>
        <div className="row col-12">
            
            <div className="col-3">
                &nbsp;
            </div>
            <div className="col-3">
                &nbsp;
            </div>
        </div>
        <div className="row col-12">
                <div className="col-3">
                    <span>
                        Oportunidades:
                    </span> &nbsp;
                    <span className="font-weight-bold">
                        {account.opportunities}
                    </span> &nbsp;
                </div>
                <div className="col-3">
                    <span>
                        Contactos:
                    </span> &nbsp;
                    <span className="font-weight-bold">
                    {account.contacts}
                    </span> &nbsp;
                </div>
                <div className="col-3">
                    <span>
                        Notas:
                    </span> &nbsp;
                    <span className="font-weight-bold">
                    {account.notes}
                    </span> &nbsp;
                </div>
                <div className="col-3">
                    <span>
                        Eventos:
                    </span>&nbsp;
                    <span className="font-weight-bold">
                    {account.events}
                    </span>
                </div>
            </div>
        </div>
);

export default AccountCard;