import React from 'react';

const Error  = ({label}) => (
    <div className="alert col-12 text-center rounded-bottom alert-danger" style={{'height': '40px'}}>
        {label}
    </div>
);
export default Error;
