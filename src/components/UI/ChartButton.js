import CartIcon from './CartIcon';
import classes from './ChartButton.module.css';

const ChartButton =(props)=>{
    return <button className={classes.button}>
        <span className={classes.icon}><CartIcon /></span>
        <span>{props.children}</span>
        <span className={classes.badge}> 3</span>
        </button>
}
export default ChartButton;