/* eslint-disable react/prop-types */
import classes from "./CartItems.module.css";
import React from "react";
import { useCartStore } from "../store/Cart/cart.store";
const CartItems = (props) => {
  const { addItem, removeItem } = useCartStore();

  const itemAddHandler = () => {
    addItem({
      id: props.id,
      price: Number(props.price),
      amount: 1,
      name: props.name,
    });
  };
  const itemRemoveHandler = () => {
    removeItem({
      ...props,
      id: props.id,
    });
  };
  return (
    <li className={classes.item} key={props.key}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.price}>
          ${props.price}
          <button>X{props.amount}</button>
        </div>
      </div>
      <div className={classes.amount}>
        <button onClick={itemAddHandler}>+</button>
        <button onClick={itemRemoveHandler}>-</button>
      </div>
    </li>
  );
};
export default CartItems;
