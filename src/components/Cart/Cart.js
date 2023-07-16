import classes from './Cart.module.css';
import React, {useState, useContext} from 'react';
import Modal from './Modal';

const Cart = props => {
    
    const ctx=useContext;
    const [isClosed,setIsClosed]=useState(false);
    const closeHandler=()=>{
        setIsClosed(true);
        ctx.isClosed=isClosed;
    }
    const cartItems = <ul className={classes['cart-items']}>{[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => <li>{item.name}</li>)}</ul>
    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span >Total amount</span>
            <span>35.98 zł</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Zamknij</button>
            <button className={classes.button}>Zamów</button>
        </div>
    </Modal>
};
export default Cart;