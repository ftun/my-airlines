import React from 'react';

const Select = ({
    name = '',
    id = '',
    required = true,
    options = [],
    defaultValue = '' 
}) => {
    
    if (!Array.isArray(options)) return null;
    
    return <select name={name} id={id} required={required} defaultValue={defaultValue}>
        <option value="">Seleccionar</option>
        {options.map((opt, idx) => <option key={idx} value={opt.value}>{opt.description}</option>)}
    </select>
};

export default Select;