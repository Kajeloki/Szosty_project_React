import CartIcon from '../Cart/CartIcon';
import classes from './ChartButton.module.css';
import AuthContext from '../../store/AuthContext';
import React, {useContext} from 'react';

const ChartButton =(props)=>{
    const ctx=useContext(AuthContext);

    const numberOfCartItems=ctx.items.reduce((curNumber, item)=>{
        return curNumber+item.amount;
    },0);
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>{props.children}</span>
        <span className={classes.badge}> {numberOfCartItems}</span>
        </button>
}
export default ChartButton;