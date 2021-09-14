import {DUMMY_MEALS} from "./dummy-meals";
import React from "react";
import MealItem from "../MealItem/MealItem";
import styles from "./MealList.module.css";
import Card from "../UI/Card";

const MealList = (props) => {
    return (
            <div className={styles.meals}>
                <Card>
                    <ul>
                        {DUMMY_MEALS.map(meal => <MealItem name={meal.name} description={meal.description} id={meal.id} price={meal.price} />)}
                    </ul>
                </Card>
            </div>
    )
};

export default MealList;