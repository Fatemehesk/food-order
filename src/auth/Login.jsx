import React from "react";
import classes from "./auth.module.css";
import { useAuthState } from "../store/auth/auth.store";
const Login = () => {
  const { login, currUser } = useAuthState();
  return (
    <>
      {currUser === null && (
        <button type="button" className={classes.logout} onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
export default Login;
