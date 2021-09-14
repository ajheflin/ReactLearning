import {useContext} from "react";
import CartContext from "../../store/cart-context";
import Modal from "../Content/Modal";
import CartItem from "./CartItem";

import styles from './Cart.module.css';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);


    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.cart.map((item) => (
                <CartItem
                    name={item.name}
                    amount={item.count}
                    price={item.price}
                    itemName={item.name}
                />
            ))}
        </ul>
    );

    const totalAmount = cartCtx.cartTotal.toFixed(2);

    let hasItems = totalAmount > 0;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;