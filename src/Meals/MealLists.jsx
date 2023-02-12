
import React from "react";
import classes from "./MealList.module.css";
import AddItems from "./AddItems";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const MealLists = (props) => {
  const ItemCtx=useContext(CartContext);
  const itemAddtoCartHandler=(amount)=>{
ItemCtx.addItem({
  id:props.id,
  price:props.price,
  amount:amount,
  name:props.name
})
  };
  return (
    <li className={classes.list}>
      <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div className={classes.amount}>
        <AddItems onAddToCart={itemAddtoCartHandler} />
      </div>
    </li>
  );
};
export default MealLists;
