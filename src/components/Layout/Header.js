import React, {useState, useContext} from 'react';
import classes from './Header.module.css';
import ChartButton from "../UI/ChartButton";
import mealsImage from '../../assets/meals.jpg';
import Modal from '../Cart/Modal';
import Cart from '../Cart/Cart';

const Header = (props) => {
const ctx=useContext;
    
    const submitHandler = event=>{
        event.preventDefault();
        props.onCheck();
    }
   
    return <React.Fragment>
        
        <header className={classes.header}>
            <h1>Polskie dania</h1>
            <ChartButton onClick={submitHandler}>Twój koszyk</ChartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="tekst alt" />
        </div>

    </React.Fragment>
}
export default Header;