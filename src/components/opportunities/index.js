import React, {Fragment} from 'react';
import {isEmpty} from 'lodash';

import {LoadingIndicator, OportunitiesTable, TitleWithButton} from "../commons";
import {OPPORTUNITIES} from "../../const"

const OpportunitiesList = () => (
    <Fragment>
        <div className="mx-2">
            <br></br>
            <div className="mx-2 row">
                <div className="col-sm-6">
                    <h1 className="display-9">Oportunidades</h1>
                </div>
                <div className="col-sm-6" align="right">
                    <h1><TitleWithButton label="" buttonLabel="Nueva Oportunidad"/></h1>
                </div>
            </div>
        </div>
        {isEmpty(OPPORTUNITIES) && (<LoadingIndicator/>)}
        {!isEmpty(OPPORTUNITIES) && (<OportunitiesTable showUser showPagination showDate showTools  items={OPPORTUNITIES}/>)}
    </Fragment>
);

export default OpportunitiesList;

