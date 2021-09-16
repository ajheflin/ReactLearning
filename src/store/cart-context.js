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
    const removeFromCart = (itemname) => {
        updateCart(previousCart => {
            return previousCart.filter(item => item.name !== itemname);
        });
    }
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
            if(previousCount - 1 > 0) {
                let cartIndex = cart.findIndex(cartItem => cartItem.name === itemname);
                updateCart((previousCart) => {
                    previousCart[cartIndex].count = previousCart[cartIndex].count - 1;
                    return previousCart;
                });
                updateCartTotal((previousCartTotal) => {
                    return previousCartTotal - cart[cartIndex].price;
                });
                return previousCount - 1;
            } else if(previousCount - 1 === 0) {
                let cartIndex = cart.findIndex(cartItem => cartItem.name === itemname);
                updateCartTotal((previousCartTotal) => {
                    return previousCartTotal - cart[cartIndex].price;
                });
                updateCartCount(previousCount => {
                    return previousCount - cart[cartIndex].count;
                });
                removeFromCart(itemname);
            }
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