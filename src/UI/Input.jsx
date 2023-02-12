import classes from "./Input.module.css";
import React from 'react';
const Input = React.forwardRef((props,ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.itemInfo.id}>{props.label}</label>
      <input ref={ref} id={props.itemInfo.id} {...props.itemInfo} />
    </div>
  );
});

export default Input;
 

