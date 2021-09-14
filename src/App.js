import React, {useState} from 'react';
import Header from "./components/Header/Header";
import MealsSummary from "./components/Content/MealsSummary";
import MealList from "./components/Body/MealList";
import Cart from "./components/Cart/Cart";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const hideCart = () => {
        setCartIsShown(false);
    }
    const showCart = () => {
        setCartIsShown(true);
    }

    return (
        <React.Fragment>
            {cartIsShown && <Cart onClose={hideCart} />}
            <Header onShowCart={showCart} />
            <MealsSummary />
            <MealList />
        </React.Fragment>
    );
}

export default App;
