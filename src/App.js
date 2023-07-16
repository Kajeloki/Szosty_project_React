import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import AuthContext from "./store/AuthContext";
import Cart from "./components/Cart/Cart";

function App(props) {
  const [isReady,setIsReady]=useState(false);

  const showCartHandler =()=>{
    setIsReady(true);
  }
  const hideCartHandler =()=>{
    setIsReady(false);
  }
  return (
    <AuthContext.Provider value={{isClosed: false}}>
      {isReady && <Cart onClose={hideCartHandler}/>}
      <Header onCheck={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </AuthContext.Provider>

  );
}

export default App;
