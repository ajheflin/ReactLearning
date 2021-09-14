import React from "react";
import styles from './Header.module.css';
import mealsImage from '../Content/meals.jpg';
import CartButton from "./CartButton";

const Header = (props) => {
    return (
        <React.Fragment>
            <div className={styles.header}>
                <h1>ReactMeals</h1>
                <CartButton onShowCart={props.onShowCart} />
            </div>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!'/>
            </div>
        </React.Fragment>
    );
};

export default Header;