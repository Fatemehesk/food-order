/* eslint-disable react/prop-types */
import React, { useState } from "react";
import classes from "./HeaderCartButton.module.css";
import { useCartStore } from "../store/Cart/cart.store";
import { useAuthState } from "../store/auth/auth.store";
import Cart from "../Cart/Cart";

const HeaderCartButton = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const { items } = useCartStore();
  const { username, email, phoneNumber, uid, photoURL} = useAuthState();
console.log(username, email, phoneNumber, uid, photoURL);
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <div className={classes.container}>
      <button
        className={classes.button}
        onClick={() => {
          props.handleScroll();
          setCartIsShown(true);
        }}
      >
        <div>
          <span>Your Cart</span>
          <span className={classes.badge}>{numberOfCartItems}</span>
        </div>
        {/* {username && <span>{username}</span>} */}
      </button>
      {cartIsShown && <Cart onClose={setCartIsShown} />}
    </div>
  );
};

export default HeaderCartButton;
