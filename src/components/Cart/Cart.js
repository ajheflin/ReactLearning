import {useCallback, useContext, useState} from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const [name, setName] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const [address, setAddress] = useState('');
    const [addressTouched, setAddressTouched] = useState(false);
    const cartCtx = useContext(CartContext);

    const nameValid = name.trim() !== '';
    const addressValid = address.trim() !== '';

    const formValid = nameValid && addressValid;

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const nameBlurHandler = (event) => {
        setNameTouched(true);
    }
    const addressChangeHandler = (event) => {
        setAddress(event.target.value);
    }
    const addressBlurHandler = (event) => {
        setAddressTouched(true);
    }

    const createOrder = useCallback(async (orderDetails) => {
        const response = await fetch('https://react-http-3952a-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        });
        const data = await response.json();
        console.log(data);
    }, [])


    const submitHandler = (event) => {
        event.preventDefault();
        if(formValid) {
            // noinspection JSIgnoredPromiseFromCall
            createOrder({
                cart: cartCtx.items,
                name,
                address
            });
            setName('');
            setAddress('');
        }
    }

    const nameClasses = nameTouched && !nameValid ? `${classes.formControl} ${classes.invalid}` : `${classes.formControl}`;
    const addressClasses = addressTouched && !addressValid ? `${classes.formControl} ${classes.invalid}` : `${classes.formControl}`;

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {hasItems && <form onSubmit={submitHandler}>
                <div className={nameClasses}>
                    <label htmlFor="name">Name </label>
                    <input className={classes.input} type="text" name="name" value={name} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
                </div>
                <div className={addressClasses}>
                    <label htmlFor="name">Address </label>
                    <input className={classes.input} type="text" name="name" value={address} onChange={addressChangeHandler} onBlur={addressBlurHandler}/>
                </div>
                <div>
                    <input type="submit" name="Submit" value="Order" className={classes.submit} disabled={!formValid} />
                </div>
            </form>}
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                {/*{hasItems && <button className={classes.button}>Order</button>}*/}
            </div>
        </Modal>
    );
};

export default Cart;
