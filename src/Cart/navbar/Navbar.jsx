/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchNavbar from "../navbar/SearchNavbar";
import classes from "../navbar/Navbar.module.css";
const Navbar = () => {
  const [serachMeal, setSearchMeal] = useState("");
  const serchHandler = () => {};
  return (
    <form className={classes.nav}>
      <ul>
        <li>
          <NavLink to={"/"}>
            <h1>MealMate</h1>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/favorits"}>
            <h2>Favorits</h2>
          </NavLink>
        </li>
      </ul>

      <SearchNavbar
        searchVal={serachMeal}
        setSearchVal={setSearchMeal}
        serachHandler={serchHandler}
      />
    </form>
  );
};
export default Navbar;
