import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import Meal from '../Meal/Meal';
import { useEffect, useState } from 'react';

const AvailableMeals =(props)=>{
  const [meals, setMeals]=useState([]);
  const [isLoading, setIsLoading]= useState(true);
  const [httpError, setError]= useState();

  useEffect(()=>{
    const fetchHandler = async ()=>{
      const response = await fetch('https://strona-do-zamawiania-jedzenia-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      const data = await response.json();
      
      if(!response.ok)
      {
        throw new Error('Coś poszło nie tak');
      }
      for(const key in data)
      loadedMeals.push({
    id: key,
    name: data[key].name,
    description: data[key].description,
    price: data[key].price
  
    });
    setMeals(loadedMeals);
    setIsLoading(false);
    };
    
      fetchHandler().catch(error =>{
        setIsLoading(false);
        setError(error.message);
      });
    
    
    },[])
  const loadedMeals = [];
 if(httpError)
 {
  return <section className={classes.mealsError}>
    <p>{httpError}</p>
  </section>
 }
if(isLoading)
{
  return <section className={classes.mealsLoading}>
    <p>Wczytywanie...</p>
  </section>
}
      const mealsList=meals.map(meal=>
        <Meal name={meal.name} description={meal.description} price={meal.price} key={meal.id} id={meal.id}/>
        
      );
      
return <Card className={classes.meals}>
    <ul>
        {mealsList}
    </ul>
</Card>
}
export default AvailableMeals;