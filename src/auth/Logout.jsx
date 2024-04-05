import { useAuthState } from "../store/auth/auth.store";
import React from "react";
import classes from "./auth.module.css";
import { Link } from "react-router-dom";

const Logout = () => {
  const { logout, username, photoURL } = useAuthState();

  return (
    <>
      {username !== null && (
        <div className={classes.user}> 
          <Link to={`/profile`}>
          <div className={classes.logo}>
          {photoURL === null ? (
            <div className={classes.logo__letter}>
              <span>{username && username.slice(0, 1)}</span>
            </div>
          ) : (
            <img src={photoURL} alt="Profile Picture" />
          )}
          </div></Link>
          <button type="button" className={classes.logout} onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </>
  );
};
export default Logout;
