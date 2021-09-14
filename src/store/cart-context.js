import React, {useState} from "react";

const CartContext = React.createContext({
    cart: [],
    cartCount: 0,
    cartTotal: 0,
    addToCart: (item, count) => {},
    addOneToCart: (item, count) => {},
    removeOneFromCart: (item) => {},
});

export const CartContextProvider = (props) => {
    const [cartCount, updateCartCount] = useState(0);

    const [cart, updateCart] = useState([]);

    const [cartTotal, updateCartTotal] = useState(0);

    const addToCart = (item, count) => {
        updateCartCount((previousCount) => {
            return previousCount + parseInt(count);
        });
        updateCartTotal((previousCartTotal) => {
            return previousCartTotal + (parseInt(count) * item.price);
        });
        updateCart((previousCart) => {
            if(previousCart.some(cartItem => cartItem.name === item.name)) {
                let cartIndex = previousCart.findIndex(cartItem => cartItem.name === item.name);
                previousCart[cartIndex].count = previousCart[cartIndex].count + parseInt(count);
            } else {
                previousCart.push({
                    count: parseInt(count),
                    name: item.name,
                    description: item.description,
                    price: item.price
                });
            };
            console.log(previousCart);
            return previousCart;
        });
    };
    const addOneToCart = (itemname) => {
        updateCartCount((previousCount) => {
            return previousCount + 1;
        });
        let cartIndex = cart.findIndex(cartItem => cartItem.name === itemname);
        updateCart((previousCart) => {
            previousCart[cartIndex].count = previousCart[cartIndex].count + 1;
            return previousCart;
        });
        updateCartTotal((previousCartTotal) => {
            return previousCartTotal + cart[cartIndex].price;
        });
    };
    const removeOneFromCart = (itemname) => {
        updateCartCount((previousCount) => {
            return previousCount - 1;
        });
        let cartIndex = cart.findIndex(cartItem => cartItem.name === itemname);
        updateCart((previousCart) => {
            previousCart[cartIndex].count = previousCart[cartIndex].count - 1;
            return previousCart;
        });
        updateCartTotal((previousCartTotal) => {
            return previousCartTotal + cart[cartIndex].price;
        });
    };

    return (
        <CartContext.Provider value={{
            cart: cart,
            cartCount: cartCount,
            cartTotal: cartTotal,
            addToCart: addToCart,
            addOneToCart: addOneToCart,
            removeOneFromCart: removeOneFromCart,
        }}>{props.children}</CartContext.Provider>
    );
};

export default CartContext;