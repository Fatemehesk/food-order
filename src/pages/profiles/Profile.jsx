import React from "react";
import { useAuthState } from "../../store/auth/auth.store";
import classes from "./Profile.module.css";
const Profile = () => {
    const { username, email,photoURL } = useAuthState();

    return (
      <>
        <section className={classes.profile}>
          <h2>Profile</h2>
          <div className={classes.info}>
            {" "}
            {photoURL === null ? (
              <div className={classes.profile__letter}>
                <span>{username && username.slice(0, 1)}</span>
              </div>
            ) : (
              <img src={photoURL} alt="Profile Picture" />
            )}
            <div >
              <div className={classes.row}>
        <p className={classes.label}>Name:</p>
        <p>{username}</p>
      </div>
      <div className={classes.row}>
        <p className={classes.label}>Email:</p>
        <p>{email}</p>
      </div>
              <button>Edit Profile</button>
            </div>
          </div>
        </section>
      </>
    );
  };
  export default Profile;