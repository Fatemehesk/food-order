import {Fragment,useState} from 'react';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{
setCartIsShown(true);
  };
  const hideCartHandler=()=>{
setCartIsShown(false);
  };
  return (
<CartProvider>
 {cartIsShown && <Cart onClose={hideCartHandler}/>} 
  <Header onShowCart={showCartHandler}/>
  <Meals/>
</CartProvider>
  );
}

export default App;