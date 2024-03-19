/* eslint-disable no-unused-vars */
import react from "react";
const CartContext=react.createContext(
    {
        items:[],
        totalAmount:0,
        searchParams: '',
        mealsLists:[],
        setSeachParamHandler:(arg)=>{},
    handleSearch:(param)=>{},
        addItem: (item)=>{},
        removeItem: (id)=>{},

    }
);
export default CartContext;