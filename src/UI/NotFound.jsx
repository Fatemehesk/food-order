/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.wrapper}>
      <h1>Page not found</h1>
      <Link to="/">Go Back To Home Page</Link>
    </div>
  );
};
export default NotFound;
