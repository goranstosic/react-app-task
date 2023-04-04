import ReactDOM from "react-dom";
import classes from './Modal.css';
import {Fragment} from "react";

const Backdrop = props => {
    return <div className='backdrop' />
};

const ModalOverlay = props => {
    return (<div className='modal'>
        <div className='content'>{props.children}</div>
    </div>)
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
   return (
       <Fragment>
           {ReactDOM.createPortal(<Backdrop/>, portalElement)}
           {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
       </Fragment>
   )
}

export default Modal;