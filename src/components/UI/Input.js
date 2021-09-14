import React from 'react';

import classes from './Input.module.css';

const Input = props => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input className={props.invalid === "true" ? classes.invalid : ''} type={props.type} onChange={props.onChange} value={props.value} />
        </div>
    );
};

export default Input;