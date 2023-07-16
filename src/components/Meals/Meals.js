import React from "react";
import Meal from "./Meal";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Card from '../UI/Card'

const Meals = () => {
    return <React.Fragment>
        <MealsSummary />
        <p>To jest lista posiłków</p>
        
        <AvailableMeals />
       
        
    </React.Fragment>
}
export default Meals;