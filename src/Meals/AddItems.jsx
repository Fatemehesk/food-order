/* eslint-disable react/prop-types */
import classes from "./AddItems.module.css";
import Input from "../UI/Input";
import React, { useRef, useState } from "react";
const AddItems = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const AmountValue = amountInputRef.current.value;
    const EnteredAmountNumber = +AmountValue;
    if (
      AmountValue.trim().length === 0 ||
      EnteredAmountNumber < 1 ||
      EnteredAmountNumber > 15
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(EnteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        itemInfo={{
          id: "amount",
          type: "number",
          min: "1",
          max: "15",
          defaultValue: 1,
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>please enter valid number between 1 to 15</p>}
    </form>
  );
};
export default AddItems;
