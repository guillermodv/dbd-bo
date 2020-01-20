import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {isEmpty} from 'lodash';
import {requestStaticData} from "../../../actions/staticData";

const Footer = () => {
    const dispatch = useDispatch();
    let profile = useSelector(state => state.staticData.profile);

    useEffect(() => {
        dispatch(requestStaticData());
    }, [dispatch]);

    return (
        <footer className="page-footer font-small bg-primary"  style={{'font-size': '14px'}}>
            <div className="footer-copyright py-2 text-white">
                    <div className="col-12 text-right">
                            Southern Horizon.&nbsp;&nbsp;
                            {`Version ${profile.version}`}&nbsp;&nbsp;
                            {!isEmpty(profile.lastAccess) && (
                                <span>
                                    Último Ingreso&nbsp;&nbsp;
                                    {profile.lastAccess}
                                 </span>
                            )}
                    </div>
                </div>
        </footer>
    );
};
export default Footer;