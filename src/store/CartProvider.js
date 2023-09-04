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
        
        const existingCartItemIndex= state.items.findIndex(item =>  item.id===action.id);
        const existingCartItem=state.items[existingCartItemIndex];
        const updatedTotalAmounts = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if(existingCartItem.amount===1)
        {
            updatedItems = state.items.filter(item => item.id !== action.id);
        }else
        {
            const updatedItem={
                ...existingCartItem,
                amount: existingCartItem.amount -1
            };
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmounts
        }
    }else if(action.type==='CLEAR')
    {
        return defaultCartState;
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

    const clearCartHandler =()=>{
        dispatchCartAction({type: 'CLEAR'})
    };
    const cartContent ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        clearCart: clearCartHandler
    };
    return <AuthContext.Provider value={cartContent}>
        {props.children}
    </AuthContext.Provider>
}
export default CartProvider;