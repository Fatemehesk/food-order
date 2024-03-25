import {AuthContext} from "../store/auth-context";
import React, { useContext } from "react";

const Login = () => {
  const { login, currentUser } = useContext(AuthContext);
  return (
   <>{!currentUser && (
    <button type="button" className="btn btn-warning" onClick={login}>
      Login
    </button>
  )}</> 
  );
};
export default Login;
