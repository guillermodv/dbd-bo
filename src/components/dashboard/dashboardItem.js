import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {isEmpty} from 'lodash';

import {Donuts, LoadingIndicator} from "../commons";
import {requestDashboardItem} from "../../actions/dashboard";

const DashboardItemShower = (props) => {
    const dispatch = useDispatch();
    let {items} = useSelector(state => state.dashboardItems);

    useEffect(() => {
        dispatch(requestDashboardItem(props.match.params.id));
    }, [props.match.params.id, dispatch]);

    function handleBack() {
        return props.history.push('/dashboard');
    }

    return(
        <Fragment>
            <div className="row">
                <div className={"col-sm-6 text-left"}>
                    &nbsp;
                </div>
                <div className={"col-6 text-right mt-2"}>
                    <button  type="button" className="btn btn-success" onClick={() => handleBack()}>
                        Back to main screen.
                    </button>
                </div>
            </div>
            {isEmpty(items) && <LoadingIndicator/>}
            {!isEmpty(items) && items.map(item => (
                <div className="row mx-2 my-2">
                    <div className="col-md-4">
                        <h5>{item.RULE}</h5>
                    </div>
                    <div className="col-md-4">
                        <Donuts succeded={item.SUCCEDED} failed={item.FAILED}/>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default DashboardItemShower;
