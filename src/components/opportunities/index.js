import React, {Fragment} from 'react';
import {isEmpty} from 'lodash';

import {GenericsTable, LoadingIndicator, TitleWithButton} from "../commons";
import {ITEM} from "../../const"

const OpportunitiesList = () => (
    <Fragment>
        <div className="mx-2">
            <br></br>
            <div className="mx-2 row">
                <div className="col-sm-6">
                    <h1 className="display-9">List</h1>
                </div>
                <div className="col-sm-6" align="right">
                    <h1><TitleWithButton label="" buttonLabel="Nuevo Item"/></h1>
                </div>
            </div>
        </div>
        {isEmpty(ITEM) && (<LoadingIndicator/>)}
        {!isEmpty(ITEM) && (<GenericsTable showUser showPagination showDate showTools  items={ITEM}/>)}
    </Fragment>
);

export default OpportunitiesList;

