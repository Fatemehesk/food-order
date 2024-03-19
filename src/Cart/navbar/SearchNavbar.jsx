/* eslint-disable react/prop-types */

import React, { useContext } from "react";
import classes from '../navbar/NavbarSearch.module.css';
import CartContext from "../../store/cart-context";

const SearchNavbar= () => {
  const ctx = useContext(CartContext);

  return (
    <div className={classes.wrapper}>
      <div className={classes.input}>
     
        <input
          type="text"
          className={classes.input}
          placeholder="serch your desire meal"
          value={ctx.searchParams}
          onChange={(e) => {ctx.setSeachParamHandler(e.target.value)}}
        />
        <div className={classes.button}>
          <button className="btn btn-primary" type="button" onClick={() =>{console.log(ctx.searchParams,"search"); ctx.handleSearch(ctx.searchParams);}}>
            Search Meal
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchNavbar;