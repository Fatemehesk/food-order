import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/home/index";
import FavoritMeals from "./pages/favorits/index";
import MealsDetail from "./pages/detail/index";
import HeaderCartButton from "./Layout/HeaderCartButton";
import Profile from "./pages/profiles/Profile";
import classes from "./Layout/Header.module.css";
import Navbar from "./Cart/Navbar/Navbar";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import NotFound from "./UI/NotFound";
import "./App.css";
import { useAuthState } from "./store/auth/auth.store";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function App() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { uid } = useAuthState();
  console.log(uid);
  const location = useLocation();
  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <div>
          <header className={classes.header}>
            <Navbar />
            <Login />
            <Logout />
            <HeaderCartButton handleScroll={handleScrollToTop} />
          </header>
          <Routes location={location}>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/favorits" element={<FavoritMeals />} />
            <Route path="/items/:id" element={<MealsDetail />} />
            <Route
              path="/profile"
              element={uid ? <Profile /> : <Navigate replace to="/" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
