import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import Meal from '../Meal/Meal';

const AvailableMeals =(props)=>{
    const DUMMY_MEALS = [
        {
          id: '1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: '2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: '3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: '4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];

      const mealsList=DUMMY_MEALS.map(meal=>
        <Meal name={meal.name} description={meal.description} price={meal.price} key={meal.id}/>
      );
return <Card className={classes.meals}>
    <ul>
        {mealsList}
    </ul>
</Card>
}
export default AvailableMeals;