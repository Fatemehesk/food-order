import {AuthContext} from "../store/auth-context";
import React, { useContext } from "react";
import classes from "./auth.module.css";

const Login = () => {
  const { login, currentUser } = useContext(AuthContext);
  return (
   <>{currentUser === null && (
    <button type="button" className={classes.logout} onClick={login}>
      Login
    </button>
  )}</> 
  );
};
export default Login;
