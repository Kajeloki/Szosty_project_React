import Input from '../UI/Input';
import classes from './MealForm.module.css';
import Modal from '../Cart/Modal';
import AuthContext from '../../store/AuthContext';
import React, {useState, useContext, useRef} from 'react';

const MealForm = props =>{
    const mealAmount=useRef();
    const [amountIsValid, setAmountIsValid]=useState(true);

    const ctx=useContext(AuthContext);
const onSubmitHandler =(event)=>{
    event.preventDefault();
    const enteredMealAmount= mealAmount.current.value;
    const numberEnteredMealAmount= +enteredMealAmount;
   // ctx.totalAmount+=enteredMealAmount
   if(enteredMealAmount.trim().length ===0 || numberEnteredMealAmount<1 || numberEnteredMealAmount>5)
   {
    setAmountIsValid(false);
    return;
   }
   props.onAddToCart(enteredMealAmount)
  
}
return <form className={classes.form} onSubmit={onSubmitHandler} >
    <Input ref={mealAmount} label="Ilość" input={{type:'number', id:'amount_'+props.id, min: '1',max: '5', step: '1', defaultValue: '1' }} />
    <button type='submit' >+ Dodaj</button>
    {!amountIsValid && <p>Proszę podaj wartość od 1 do 5</p>}
</form>
}
export default MealForm;