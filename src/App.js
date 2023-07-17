import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import AuthContext from "./store/AuthContext";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App(props) {
  const [isReady,setIsReady]=useState(false);

  const showCartHandler =()=>{
    setIsReady(true);
  }
  const hideCartHandler =()=>{
    setIsReady(false);
  }
  return (
    <CartProvider >
      {isReady && <Cart onClose={hideCartHandler}/>}
      <Header onCheck={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>

  );
}

export default App;
