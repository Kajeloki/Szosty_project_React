import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';
const isNotFiveChar = (value) => value.trim().length!==5;

const Checkout =(props)=>{
    const nameInputRef= useRef();
    const streetInputRef= useRef();
    const postInputRef= useRef();
    const cityInputRef= useRef();
    const [formValidity, setFormValidity]=useState({
        name: true,
        street: true,
        post: true,
        city: true
    });




    

    const confrimHandler =(event)=>{
        event.preventDefault();

        const name=nameInputRef.current.value;
        const street=streetInputRef.current.value;
        const post=postInputRef.current.value;
        const city=cityInputRef.current.value;
    
        const enteredNameIsValid = !isEmpty(name);
        const enteredStreetIsValid = !isEmpty(street);
        const enteredPostIsValid = !isNotFiveChar(post);
        const enteredCityIsValid = !isEmpty(city);
        const formIsValid = enteredNameIsValid && enteredCityIsValid && enteredPostIsValid && enteredStreetIsValid;
        setFormValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            post: enteredPostIsValid,
            city: enteredCityIsValid
        })

        if(formIsValid)
        {
            console.log("Wprowadone dane są poprawne");
            props.onConfirm({
                name: name,
                street: street,
                post: post,
                city: city
            });
        } else{
            console.log("Wprowadź poprawne dane");
        }
            
      
    };
    return <form className={classes.form} onSubmit={confrimHandler}>
         <div className={`${classes.control} ${formValidity.name ? '' : classes.invalid}`}>
        <label>Imię i nazwisko</label>
        <input type='text' ref={nameInputRef} />
        
        </div>
        <div className={`${classes.control} ${formValidity.street ? '' : classes.invalid}`}>
        <label>Ulica</label>
        <input type='text' ref={streetInputRef}></input>
        
        </div>
        <div className={`${classes.control} ${formValidity.post ? '' : classes.invalid}`}>
        <label>Kod pocztowy</label>
        <input type='text' ref={postInputRef}></input>
        
        </div>
        <div className={`${classes.control} ${formValidity.city ? '' : classes.invalid}`}>
        <label>Miasto</label>
        <input type='text' ref={cityInputRef}></input>
        
        </div>
        <div className={classes.actions}>
        <button className={classes.submit}>Zamów</button>
        <button onClick={props.onCancel} type='button'>Anuluj</button>
        </div>
        
    </form>
}
export default Checkout;