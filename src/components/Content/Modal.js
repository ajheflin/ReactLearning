import styles from './Modal.module.css';

import React from "react";
import ReactDOM from "react-dom";

const backdropNode = document.getElementById("modal-backdrop");
const modalNode = document.getElementById("modal-root");

const Backdrop = () => {
    return (
        <div className={styles.backdrop}>

        </div>
    );
};
const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div>{props.children}</div>
        </div>
    )
}

const Modal = (props) => {
    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, backdropNode)
            }
            {
                ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalNode)
            }
        </React.Fragment>
    )
}

export default Modal;