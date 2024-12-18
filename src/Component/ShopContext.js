import React, { createContext, useState } from "react";
import Menu from "./DataApi";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    const cart = {};
    Menu.forEach(item => {
        cart[item.id] = 0;
    });
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem(prev => ({
            ...prev,
            [itemId]: prev[itemId] + 1
        }));
        console.log(cartItem);
    }

    const removeFromCart = (itemId) => {
        setCartItem(prev => ({
            ...prev,
            [itemId]: Math.max(prev[itemId] - 1, 0) // Ensure quantity doesn't go below 0
        }));
    }

    const contextValue = { Menu, cartItem, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
