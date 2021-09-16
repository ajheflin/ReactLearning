import classes from './CartItem.module.css';
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {

    const cartCtx = useContext(CartContext);

    const removeOneFromCart = () => {
        cartCtx.removeOneFromCart(props.name);
    };
    const addOneToCart = () => {
        cartCtx.addOneToCart(props.name);
    };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button value={props.itemName} onClick={removeOneFromCart}>−</button>
        <button value={props.itemName} onClick={addOneToCart}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
