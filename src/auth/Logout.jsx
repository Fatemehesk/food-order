
import {AuthContext} from "../store/auth-context";
import React, { useContext, useEffect } from "react";
import classes from "./auth.module.css";

const Logout = () => {
  const { logout, currentUser } = useContext(AuthContext);
  console.log(currentUser,"logout");
  useEffect(()=>{},[]);
  return (
   <>{currentUser !== null && (
    <button type="button" className={classes.logout}  onClick={logout}>
      Logout 
    </button>
  )}</> 
  );
};
export default Logout;
