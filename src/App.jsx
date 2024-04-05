import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/index";
import FavoritMeals from "./pages/favorits/index";
import MealsDetail from "./pages/detail/index";
import HeaderCartButton from "./Layout/HeaderCartButton";
import Profile from "./pages/profiles/Profile"
import classes from './Layout/Header.module.css';
import Navbar from "./Cart/Navbar/Navbar";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import {useAuthState} from "./store/auth/auth.store";
function App() {

    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    const { uid } = useAuthState();
    console.log(uid);
  return (
    <>
      <header className={classes.header}>
                
                <Navbar/>
                <Login/>
                <Logout/>
               <HeaderCartButton handleScroll={handleScrollToTop}/>
            </header>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/favorits' element={<FavoritMeals/>}/>
        <Route path='/items/:id' element={<MealsDetail/>}/>
        <Route  path='/profile' element={uid ? <Profile/> : <HomePage />}/> 
      </Routes>
    
    </>
  );
}

export default App;
