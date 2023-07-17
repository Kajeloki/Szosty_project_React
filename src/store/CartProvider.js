import AuthContext from "./AuthContext";
import React, {useReducer} from "react";

const defaultCartState={
    items: [],
    totalAmount: 0
}
const cartReducer =(state, action)=>{
    if(action.type==='ADD')
    {
        const updatedItems=state.items.concat(action.item);
        const newTotalAmount= state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        }
    }else if(action.type==='REMOVE')
    {
        return
    }
return defaultCartState;
}
const CartProvider = props => {

    const [cartState, dispatchCartAction]=useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler =(item)=>{
        dispatchCartAction({type:'ADD', item: item});
    };

    const removeItemToCartHandler =(id)=>{
        dispatchCartAction({type:'REMOVE', id: id});
    };
    const cartContent ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: (item) => { },
        removeItem: (item) => { }
    };
    return <AuthContext.Provider value={cartContent}>
        {props.children}
    </AuthContext.Provider>
}
export default CartProvider;