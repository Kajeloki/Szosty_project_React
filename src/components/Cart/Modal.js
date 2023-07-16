import React from 'react';
import classes from './Modal.module.css';
import Cart from './Cart';
import  ReactDOM  from 'react-dom';

const Backdrop = props =>{
return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = props =>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal =props =>{
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('overlays-root'))};
        {ReactDOM.createPortal(<ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>, document.getElementById('overlays-root'))};
    </React.Fragment>
}
export default Modal;