import React from 'react';

const Message = ({label}) => (
    <div className="alert alert-success rounded-bottom text-center" role="alert">
        {label}
    </div>
);

export default Message;
