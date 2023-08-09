import classes from './Checkout.module.css';

const Checkout =(props)=>{
    return <form className={classes.form}>
         <div className={classes.control}>
        <label>Imię i nazwisko</label>
        <input ></input>
        </div>
        <div className={classes.control}>
        <label>Ulica</label>
        <input ></input>
        </div>
        <div className={classes.control}>
        <label>Kod pocztowy</label>
        <input ></input>
        </div>
        <div className={classes.control}>
        <label>Miasto</label>
        <input ></input>
        </div>
        <button>Zamów</button>
        <button onClick={props.onCancel}>Anuluj</button>
    </form>
}
export default Checkout;