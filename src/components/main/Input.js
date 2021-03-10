// =================================================
import React from 'react';
// =================================================

// Component

function Input({ propsClass, props}) {
    const {title, type} = props;

    return (
        <label className={propsClass}>
            <p className={`${propsClass}_text text`}>{title}</p>
            <input
                className={`${propsClass}_input input`}
                type={type}
            />
        </label>
    );
}

export default Input;