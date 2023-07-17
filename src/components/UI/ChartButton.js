import CartIcon from '../Cart/CartIcon';
import classes from './ChartButton.module.css';
import AuthContext from '../../store/AuthContext';
import React, {useContext, useEffect, useState} from 'react';

const ChartButton =(props)=>{
    const [btnIsHighlighted, setbtnIsHighlighted]=useState(false);
    const ctx=useContext(AuthContext);

    const numberOfCartItems=ctx.items.reduce((curNumber, item)=>{
        return curNumber+item.amount;
    },0);
    const {items}=ctx
    const btnClasses=`${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    useEffect(()=>{
        if(ctx.items.length===0)
        {
           return ; 
        }
        setbtnIsHighlighted(true);

        const timer =setTimeout(()=>{
            setbtnIsHighlighted(false)
        }, 300);

        return ()=>{
            clearTimeout(timer);
        }
    },[items]);
    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>{props.children}</span>
        <span className={classes.badge}> {numberOfCartItems}</span>
        </button>
}
export default ChartButton;