import classes from './Cart.module.css';
import React, { useState, useContext } from 'react';
import Modal from './Modal';
import AuthContext from '../../store/AuthContext';
import CartItem from './CartItem';

const Cart = props => {

    const ctx = useContext(AuthContext);
    const [isClosed, setIsClosed] = useState(false);
    const hasItems = ctx.items.length>0;
    const onAddHandler =item =>{
        ctx.addItem({...item, amount:1})
    }
    const onRemoveHandler =id =>{
        ctx.removeItem(id)
    }
    const cartItems =
        <ul className={classes['cart-items']}>
            {ctx.items.map((item) => 
            <li key={Math.random()}>
                <CartItem 
                key={item.id} 
                name={item.name} 
                price={item.price} 
                amount={item.amount} 
                onAdd={onAddHandler.bind(null, item)} 
                onRemove={onRemoveHandler.bind(null, item.id)}
                />
                </li>
                )}
        </ul>
        const totalAmount= ctx.totalAmount.toFixed(2);
    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span >Całkowita kwota</span>
            <span>{totalAmount} zł</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Zamknij</button>
            {hasItems &&<button className={classes.button}>Zamów</button>}
        </div>
    </Modal>
};
export default Cart;