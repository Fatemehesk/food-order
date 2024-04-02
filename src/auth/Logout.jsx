import { useAuthState } from "../store/auth/auth.store";
import React from "react";
import classes from "./auth.module.css";

const Logout = () => {
  const { logout,  username } = useAuthState();

  return (
    <>
      { username !== null && (
        <button type="button" className={classes.logout} onClick={logout}>
          Logout
        </button>
      )}
    </>
  );
};
export default Logout;
