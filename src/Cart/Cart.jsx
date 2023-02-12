import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import CartItems from "./CartItems";
const Cart = (props) => {
  const ctx = useContext(CartContext);

  
  const CtxTotalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItem = ctx.items.length> 0;

  const cardItemAddHandler=(item)=>{
    ctx.addItem({...item, amount:1});
  };
  const cardItemRemoveHandler=(id)=>{
    ctx.removeItem(id);
  };
  const Card_Items = (
    <ul className={classes["card_items"]}>
      {ctx.items.map((item) => {
        return (
          <CartItems
            name={item.name}
            price={item.price}
            amount={item.amount}
            key={item.id}
            onAdd={cardItemAddHandler.bind(null,item)}
            onRemove={cardItemRemoveHandler.bind(null,item.id)}
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
        <button className={classes.button} onClick={props.onClose}>
          close
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
//Javascripts $ function is used to call functions/variables inside a string without using concatenations
//let variableExample = 10;

//let result = `${variableExample} text`;

//console.log(result);
//output = 10 text
//this only works with backtick (` `) and not with single or double quotes
