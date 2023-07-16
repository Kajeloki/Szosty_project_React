import Card from '../UI/Card';
import classes from './Meal.module.css'

const Meal = (props) => {
    const price =`${props.price.toFixed(2)} zł`;
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
       
    </li>
    

}
export default Meal;