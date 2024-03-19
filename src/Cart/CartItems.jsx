/* eslint-disable react/prop-types */
import classes from './CartItems.module.css';
import React from 'react';
const CartItems=(props)=>{


    return(
        <li className={classes.item}>
        <div>
          <h2>{props.name}</h2>
          <div className={classes.price}>${props.price}<button>X{props.amount}</button></div>
        </div>
        <div className={classes.amount}>
          <button onClick={props.onAdd}>+</button>
          <button onClick={props.onRemove}>-</button>
        </div>
      </li>
    );
};
export default CartItems;