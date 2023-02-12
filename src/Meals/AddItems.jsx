import classes from "./AddItems.module.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";
const AddItems = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const AmountValue = amountInputRef.current.value;
    const EnteredAmountNumber = + AmountValue;
    if (
      AmountValue.trim().length === 0 ||
      EnteredAmountNumber < 1 ||
      EnteredAmountNumber > 5
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
        label='amount'
        itemInfo={{
          id: 'amount',
          type: "number",
          min: "1",
          max: "5",
          defaultValue: 1,
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>please enter valid number between 1 to 5</p>}
    </form>
  );
};
export default AddItems;
