import AuthContext from "./AuthContext";
import React, {useReducer} from "react";

const defaultCartState={
    items: [],
    totalAmount: 0
}
const cartReducer =(state, action)=>{
    if(action.type==='ADD')
    {
        const newTotalAmount= state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex= state.items.findIndex(item =>  item.id===action.item.id);
        const existingCartItem=state.items[existingCartItemIndex];
        let updatedItems;
        if(existingCartItem)
        {
            const updatedItem={
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }else{
            updatedItems= state.items.concat(action.item);

        }
        
        
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
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    };
    return <AuthContext.Provider value={cartContent}>
        {props.children}
    </AuthContext.Provider>
}
export default CartProvider;