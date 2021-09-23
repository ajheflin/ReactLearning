import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import {useCallback, useEffect, useState} from "react";

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMeals = useCallback(async () => {
        const tempMeals = [];
        const response = await fetch("https://react-http-3952a-default-rtdb.firebaseio.com/meals.json");
        const data = await response.json();
        for (const key in data) {
            tempMeals.push({
                id: key,
                name: data[key].name,
                description: data[key].description,
                price: data[key].price
            });
        }
        setMeals(tempMeals);
        setLoading(false);
    }, []);

    useEffect(() => {
        getMeals();
    }, [getMeals]);

    console.log("Rendering component...");

    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                {loading && <p>Loading...</p>}
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
