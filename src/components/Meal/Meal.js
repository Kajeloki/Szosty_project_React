import AuthContext from '../../store/AuthContext';
import Card from '../UI/Card';
import classes from './Meal.module.css'
import MealForm from './MealForm';
import React, {useContext} from 'react';


const Meal = (props) => {
    const ctx=useContext(AuthContext);
    const price =`${props.price.toFixed(2)} zł`;
    const addToCartHandler =(amount)=>{
        ctx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>
            {props.description}
        </div>
        <div className={classes.price}>
            {price}
        </div>
        </div>
       <div>
        <MealForm onAddToCart={addToCartHandler}/>
       </div>
    </li>
    

}
export default Meal;