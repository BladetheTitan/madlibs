import React from 'react';

const Input = ({title, state, name}, onChange) => {
    return (
        <div key={name}  className="input">
            <input name={data.name} value={state} onChange={onChange}/>
            <label>{title}</label>
        </div>
    )
}

export default Input