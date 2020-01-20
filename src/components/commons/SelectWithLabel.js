import React from 'react';

const SelectWithLabel = ({name, value, options, handleChange}) => (
    <select className="custom-select"
        name={name}
        value={value}
        onChange={e => handleChange(e)}>
        {options.map(i => (
            <option selected={(i.value === value) ? true : false} key={i.label} value={i.value}>{i.label}</option>
        ))}
    </select>
);

export default SelectWithLabel;