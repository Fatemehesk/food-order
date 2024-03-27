/* eslint-disable react/prop-types */
import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import { AuthContext } from "../store/auth-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={props.onClick}>
        <div>
          <span>Your Cart</span>
          <span className={classes.badge}>{numberOfCartItems}</span>
        </div>
        {currentUser && <span>{currentUser}</span>}
      </button>
    </div>
  );
};

export default HeaderCartButton;
