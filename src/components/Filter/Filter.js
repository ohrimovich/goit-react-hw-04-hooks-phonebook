import React from "react";
import PropTypes from "prop-types";
import s from './Filter.module.scss'


export default function Filter({onChange}) {
  

    const handlerChange = e => {
        const filteredValue = e.currentTarget.value;
        onChange(filteredValue);
    }
    
    return (
        <label className={s.label}>
            Find contact by name
            <input className={s.input} type="text" autoComplete="off"
                onChange={handlerChange} />
        </label>
    
    )
    
}

Filter.propTypes = {
   handlerChange: PropTypes.func
}
