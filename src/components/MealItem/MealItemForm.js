import styles from './MealItemForm.module.css';
import Input from "../UI/Input";
import {useContext, useState} from "react";
import CartContext from "../../store/cart-context";

const MealItemForm = (props) => {
    const [inputValue, updateInputValue] = useState(0);
    const [inputIsValid, setInputIsValid] = useState(null);

    const cartCtx = useContext(CartContext);

    const changeHandler = (event) => {
        updateInputValue(event.target.value);
        setInputIsValid(event.target.value > 0);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(inputIsValid) {
            cartCtx.addToCart(props.item, inputValue);
            updateInputValue(0);
        } else if(inputIsValid == null) {
            setInputIsValid(false);
        }
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input invalid={(inputIsValid !== null && inputIsValid === false) ? "true" : "false"} id="amount" label="Amount" type="number" value={inputValue} onChange={changeHandler} />
            <button>
                + Add
            </button>
        </form>
    );
};

export default MealItemForm;