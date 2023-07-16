import React from 'react';
import classes from './Header.module.css';
import ChartButton from "../UI/ChartButton";
import mealsImage from '../../assets/meals.jpg';

const Header = () => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Polskie dania</h1>
            <ChartButton>Twój koszyk</ChartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="tekst alt" />
        </div>

    </React.Fragment>
}
export default Header;