/* eslint-disable react/prop-types */
import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../assets/header.jpg";

const Header = () => {
  return (
    <>
      <div className={classes["main-img"]}>
        <img src={mealsImage} className={classes.img} />
      </div>
    </>
  );
};
export default Header;
