import React from 'react';
import {SelectWithLabel} from "../commons";
import {STATE, TYPE, POTENTIAL, RANKING} from "../../const";

const AccountForm = ({account, handleChange}) => (
    <form>
        <div className="col-11 mx-4" style={{'font-size': '15px'}}>
            <div className="row form-group">
                <div className="col-6">
                    <label>Cuenta:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Ingrese Nombre de la Cuenta"
                        required
                        value={account.name}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className="col-6">
                    <label>Razón Social:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="socialName"
                        placeholder="Ingrese Razón Social"
                        required
                        value={account.socialName}
                        onChange={e => handleChange(e)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-2 form-group">
                    <label>Ranking:</label>
                    <SelectWithLabel
                        name={"ranking"}
                        defaultLabel={"Ranking"}
                        value={account.ranking}
                        options={RANKING}
                        handleChange={handleChange}/>
                </div>
                <div className="col-2 form-group">
                    <label>Potencial:</label>
                    <SelectWithLabel
                        name={"potential"}
                        value={account.potential}
                        defaultLabel={"Potencial"}
                        options={POTENTIAL}
                        handleChange={handleChange}
                    />
                </div>
                <div className="col-2 form-group">
                    <label>Estado:</label>
                    <SelectWithLabel
                        name={"state"}
                        value={account.state}
                        defaultLabel={"Estado"}
                        options={STATE}
                        handleChange={handleChange}
                    />
                </div>
                <div className="col-2 form-group">
                    <label>Tipo:</label>
                    <SelectWithLabel
                        name={"type"}
                        value={account.type}
                        defaultLabel={"Tipo"}
                        options={TYPE}
                        handleChange={handleChange}
                    />
                </div>
            </div>
            <div className="row form-group">
                <div className="col-2">
                    <label>CUIT:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="cuit"
                        onBlur={e => handleChange(e)}
                        required
                        value={account.cuit}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className="col-4">
                    <label>Industria:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="industry"
                        placeholder="Industria"
                        required
                        value={account.industry}
                        onChange={e => handleChange(e)}
                    />
                </div>
            </div>
        </div>
    </form>
);

export default AccountForm;

