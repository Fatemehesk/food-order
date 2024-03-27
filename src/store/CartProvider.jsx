/* eslint-disable react/prop-types */
import CartContext from "./cart-context";
import React, { useEffect, useReducer, useState } from "react";
const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const updatedTotalAmount =
      state.totalAmounts + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedExistItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedExistItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmounts: updatedTotalAmount };
  }
  if (action.type === "Remove") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmounts - existingCartItem.price;

    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalAmounts: updatedTotalAmount };
  }
};
const defaultCartState = {
  items: [],
  totalAmounts: 0,
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const [searchParam, setSearchParam] = useState("");
  const [mealsList, setMealsList] = useState([]);
  const setSeachParamHandler = (prop) => {
    console.log(prop, "prop");
    setSearchParam(prop);
  };

  useEffect(() => {
    searchHandler("pizza");
  }, []);
  const searchHandler = async (param) => {
    try {
      if (param) {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/search?q=${param}`
        );
        const data = await res.json();
        console.log(data);
        setMealsList(data.recipes);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "Add",
      item: item,
    });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "Remove",
      id: id,
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmounts,
    searchParams: searchParam,
    mealsLists: mealsList,
    setSeachParamHandler: setSeachParamHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemHandler,
    handleSearch: searchHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;

//  const cartReducer = (state, action) => {
//     if (action.type === 'ADD') {
//         const updatedTotalAmount =
//           state.totalAmount + action.item.price * action.item.amount;

//         const existingCartItemIndex = state.items.findIndex(
//           (item) => item.id === action.item.id
//         );
//         const existingCartItem = state.items[existingCartItemIndex];
//         let updatedItems;

//         if (existingCartItem) {
//           const updatedItem = {
//             ...existingCartItem,
//             amount: existingCartItem.amount + action.item.amount,
//           };
//           updatedItems = [...state.items];
//           updatedItems[existingCartItemIndex] = updatedItem;
//         } else {
//           updatedItems = state.items.concat(action.item);
//         }

//         return {
//           items: updatedItems,
//           totalAmount: updatedTotalAmount,
//         };
//       }
//       if (action.type === 'REMOVE') {
//         const existingCartItemIndex = state.items.findIndex(
//           (item) => item.id === action.id
//         );
//         const existingItem = state.items[existingCartItemIndex];
//         const updatedTotalAmount = state.totalAmount - existingItem.price;
//         let updatedItems;
//         if (existingItem.amount === 1) {
//           updatedItems = state.items.filter(item => item.id !== action.id);
//         } else {
//           const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
//           updatedItems = [...state.items];
//           updatedItems[existingCartItemIndex] = updatedItem;
//         }

//         return {
//           items: updatedItems,
//           totalAmount: updatedTotalAmount
//         };
//       }

//       return defaultCartState;
//     };
