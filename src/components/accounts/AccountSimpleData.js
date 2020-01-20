import React from 'react';

const AccountSimpleData = ({account}) => (
    <div className="card">
        <div className="row col-12">
            <div className="card bg-dark text-white col-12">
                <span className="font-weight-bold">
                    Estado:&nbsp;{account.state}
                </span>
            </div>
        </div>
        <div className="row col-12">
            <div className="col-6">
                <span className="font-weight-bold">
                    Ranking:
                </span> &nbsp;
                <span className="font-italic ">
                    {account.ranking}
                </span>
            </div>
            <div className="col-6">
                <span className="font-weight-bold">
                    Potencial:
                </span> &nbsp;
                <span className="font-italic ">
                    {account.potential}
                </span>
            </div>
        </div>
        <div className="row col-12">
            <div className="col-6">
                <span className="font-weight-bold">
                    CUIT:
                </span> &nbsp;
                    <span className="font-italic">
                    {account.cuit}
                </span>
            </div>
            <div className="col-6">
                 <span className="font-weight-bold">
                    Industria:
                </span> &nbsp;
                <span className="font-italic">
                    {account.industry}
                </span>
            </div>
        </div>
    </div>
);

export default AccountSimpleData;