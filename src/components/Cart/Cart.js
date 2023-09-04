import classes from './Cart.module.css';
import React, { useState, useContext } from 'react';
import Modal from './Modal';
import AuthContext from '../../store/AuthContext';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = props => {
    const [isSubmiting, setIsSubmiting]=useState(false);
    const [isSubmited, setIsSubmited]=useState(false);
    const ctx = useContext(AuthContext);
    const [isClosed, setIsClosed] = useState(false);
    const [isOrdered, setIsOrdered] = useState(false);
    const hasItems = ctx.items.length>0;
    const onAddHandler =item =>{
        ctx.addItem({...item, amount:1})
    }
    const onRemoveHandler =id =>{
        ctx.removeItem(id)
    }

    const cancelHandler =(event)=>{
        event.preventDefault()
        setIsOrdered(false);
    }

    const orderHandler =()=>{
        setIsOrdered(true);
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

        const submitOrderHandler = async(userData)=>{
            setIsSubmiting(true)
            await fetch("https://strona-do-zamawiania-jedzenia-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
                method: 'POST',
                body: JSON.stringify({
                    user: userData,
                    orderedItems: ctx.items
                })
            })
            setIsSubmiting(false);
            setIsSubmited(true);
            ctx.clearCart();
        };

        const cartModalContent = <React.Fragment>
            {cartItems}
        <div className={classes.total}>
            <span >Całkowita kwota</span>
            <span>{totalAmount} zł</span>
        </div>
        {isOrdered && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
        <div className={classes.actions}>
            
            {!isOrdered && <button className={classes['button--alt']} onClick={props.onClose}>Zamknij</button>}
            {hasItems && !isOrdered &&<button className={classes.button} onClick={orderHandler}>Zamów</button>}
        </div>
        </React.Fragment>;

        const isSubmitingModalContent = <p>Wysyłanie danych zgłoszenia...</p>;
        const isSubmitedModalContent = <p>Zgłoszenie zostało pomyślnie wysłane</p>
    return <Modal onClose={props.onClose}>
        {!isSubmiting && !isSubmited && cartModalContent}
        {isSubmiting && !isSubmited && isSubmitingModalContent}
        {!isSubmiting && isSubmited && isSubmitedModalContent}
        
    </Modal>
};
export default Cart;