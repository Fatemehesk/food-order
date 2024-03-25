import React,{ useState } from "react";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/index";
import FavoritMeals from "./pages/favorits/index";
import MealsDetail from "./pages/detail/index";
import HeaderCartButton from "./Layout/HeaderCartButton";
import classes from './Layout/Header.module.css';
import Navbar from "./Cart/Navbar/Navbar";
import Login from "./auth/Login";
import AuthProvider from "./store/auth-context";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const hideCartHandler = () => {
    setCartIsShown(false);
};
const showCartHandler = () => {
  setCartIsShown(true);
};
  return (
    <AuthProvider>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <header className={classes.header}>
                
                <Navbar/>
                <Login/>
               <HeaderCartButton onClick={showCartHandler}/>
            </header>
      <Routes>
        <Route path='/' element={<HomePage cartStatus={setCartIsShown}/>}/>
        <Route path='/favorits' element={<FavoritMeals/>}/>
        <Route path='/items/:id' element={<MealsDetail/>}/>
      </Routes>
    
    </CartProvider></AuthProvider>
  );
}

export default App;
