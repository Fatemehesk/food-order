/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useContext, useState } from "react";
import classes from "../navbar/NavbarSearch.module.css";
import CartContext from "../../store/cart-context";
import { foodItems } from "./utils/items";
const SearchNavbar = () => {
  const ctx = useContext(CartContext);
  const [meal, setMeal] = useState("");
  const [showDropDown, setShowDropDown] = useState(true);
  const [matchedMeals, setMatchedMeals] = useState([]);

  const serchMealHandler = (event) => {
    const query = event.target.value.toLowerCase(); // Convert the query to lowercase
    setMeal(query);
    if (query.length > 1) {
      const matchedUsers = foodItems.filter((item) =>
        item.toLowerCase().includes(query)
      );
      setMatchedMeals(matchedUsers);
      setShowDropDown(true);
      // Now 'matchedUsers' will contain an array of users whose names include the search query
    } else if (query.length == 0) {
      setMatchedMeals([]);
    }
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.input}>
        <div className={classes.dropdown}>
          {" "}
          <input
            type="text"
            className={classes.input}
            placeholder="serch your desire meal"
            value={ctx.searchParams}
            onChange={(e) => {
              ctx.setSeachParamHandler(e.target.value);
              serchMealHandler(e);
            }}
          />
          {matchedMeals && matchedMeals.length !== 0 && showDropDown ? (
            <ul>
              {matchedMeals.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      ctx.handleSearch(item);
                      ctx.setSeachParamHandler(item);
                      setShowDropDown(false);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </div>

        <div className={classes.button}>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              console.log(ctx.searchParams, "search");
              ctx.handleSearch(ctx.searchParams);
              setShowDropDown(false);
            }}
          >
            Search Meal
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchNavbar;
