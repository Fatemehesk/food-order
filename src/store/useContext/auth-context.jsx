/* eslint-disable react/prop-types */
/*==============================================
 NOTE: 
 THE FOLLOWING COMPONENT PREVIOUSLY USED FOR AUTHENTICATION STATE MANAGEMENT.
 NOW, ZUSTAND IS USED INSTEAD FOR IMPROVED STATE MANAGEMENT..*/
 
import React,{ createContext, useMemo, useState } from "react";
import FirebaseAuth from "../auth/auth.firebase";

const { signInWithGoogle, handleSignOut, getCurrentUser } = FirebaseAuth;
export const AuthContext = createContext({
  login:() => {},
        logout:() => {},
        authenticate: () => {},
        currentUser:" ",
});

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = () => signInWithGoogle()?.then((res)=>{setCurrentUser(res.displayName)});
  const logout = () => handleSignOut()?.then(() => {setCurrentUser(null)});
  const authenticate = () => getCurrentUser().then(setCurrentUser);
  const authValue = useMemo(
    () => {
      return {
        login,
        logout,
        authenticate,
        currentUser,
      };
    },
    [login, logout, currentUser],
    authenticate
  );
  return <AuthContext.Provider value={authValue}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
