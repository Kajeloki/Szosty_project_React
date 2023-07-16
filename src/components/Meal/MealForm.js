import Input from '../UI/Input';
import classes from './MealForm.module.css';
import Modal from '../Cart/Modal';
import React, {useState} from 'react';

const MealForm = props =>{

return <form className={classes.form} >
    <Input label="Ilość" input={{type:'number', id:'amount_'+props.id, min: '1',max: '5', step: '1', defaultValue: '1' }} />
    <button type='submit' >+ Dodaj</button>
</form>
}
export default MealForm;