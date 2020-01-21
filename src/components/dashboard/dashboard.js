import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";

import {Donuts, LoadingIndicator, ShowIconWithLabel, TasksProgress} from "../commons";
import {requestDashboardItems} from "../../actions/dashboard";
import {isEmpty} from "lodash";

const DashboardShower = () => {
    const dispatch = useDispatch();

    let {items} = useSelector(state => state.dashboardItems);

    useEffect(() => {
        dispatch(requestDashboardItems());
    }, [dispatch]);

    return(
        <Fragment>
            {isEmpty(items) && <LoadingIndicator/>}
            {!isEmpty(items) && items.map(item => (
                <div className="row mx-2 my-2">
                    <div className="col-md-6">
                        <TasksProgress title={item.NAME} succeded={item.SUCCEDED} failed={item.FAILED} />
                    </div>
                    <div className="col-md-4">
                        <Donuts title={item.NAME} succeded={item.SUCCEDED} failed={item.FAILED}/>
                    </div>
                    <div className="col-md-2">
                        <Link to={`/dashboard/${item.NAME}`} className="btn btn-primary">
                            <ShowIconWithLabel label={"View Item"} type={"fas fa-search"}/>
                        </Link>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default DashboardShower;
