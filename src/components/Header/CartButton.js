import styles from './CartButton.module.css';
import CartIcon from "../UI/CartIcon";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
    const ctx = useContext(CartContext);

    return (
        <button className={styles.button} onClick={props.onShowCart}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            Your Cart
            <span className={styles.badge}>{ctx.cartCount}</span>
        </button>
    );
}

export default CartButton;