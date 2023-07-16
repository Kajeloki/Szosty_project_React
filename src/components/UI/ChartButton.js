import CartIcon from '../Cart/CartIcon';
import classes from './ChartButton.module.css';

const ChartButton =(props)=>{
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>{props.children}</span>
        <span className={classes.badge}> 3</span>
        </button>
}
export default ChartButton;