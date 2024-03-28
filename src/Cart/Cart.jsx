/* eslint-disable react/prop-types */
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import React from "react";
import CartItems from "./CartItems";
import { useCartStore } from "../store/Cart/cart.store";

const Cart = (props) => {
  const { totalAmount, items } = useCartStore();
  const CtxTotalAmount = `$${totalAmount.toFixed(2)}`;
  const hasItem = items.length > 0;

  const Card_Items = (
    <ul className={classes["card_items"]}>
      {items.map((item) => {
        return (
          <CartItems
          id={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            key={item.id}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {Card_Items}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>{CtxTotalAmount}</span>
      </div>
      <div className={classes.actions}>
        {hasItem && <button className={classes["button--alt"]}>Order</button>}
        <button className={classes.button} onClick={() => props.onClose(false)}>
          close
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
