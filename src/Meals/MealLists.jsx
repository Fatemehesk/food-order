/* eslint-disable react/prop-types */

import React from "react";
import classes from "./MealList.module.css";
import AddItems from "./AddItems";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/Cart/cart.store";

const MealLists = (props) => {
  const { addItem } = useCartStore();
  const itemAddtoCartHandler = (amounts) => {
    console.log(amounts,"amount test", props.name);
   addItem({
      id: props.id,
      price: Number(props.price),
      amount: amounts,
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
