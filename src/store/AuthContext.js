import React from "react";

const AuthContext =React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item)=>{},
    removeItem: (item)=>{}
    })
export default AuthContext;