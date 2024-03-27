/* eslint-disable react/prop-types */

import React from "react";
import classes from "./MealList.module.css";
import AddItems from "./AddItems";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";

const MealLists = (props) => {
  const ItemCtx = useContext(CartContext);
  const itemAddtoCartHandler = (amount) => {
    ItemCtx.addItem({
      id: props.id,
      price: props.price,
      amount: amount,
      name: props.name,
    });
  };

  return (
    <div className={classes.card}>
      <div className={classes.image}>
      <Link to={`/items/${props.id}`}>
        <img src={props.imgUrl} alt={props.name} /></Link>
      </div>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className={classes.amount}>
        <div className={classes.price}>${props.price}</div>

        <AddItems onAddToCart={itemAddtoCartHandler} />
      </div>
    </div>
  );
};
export default MealLists;
