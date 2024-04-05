import React from "react";
import classes from "./auth.module.css";
import { useAuthState } from "../store/auth/auth.store";
const Login = () => {
  const { login,  username } = useAuthState();
  return (
    <>
      { username === null && (
        <button type="button" className={classes.login} onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
export default Login;
