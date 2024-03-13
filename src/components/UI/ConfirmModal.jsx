import React, { useEffect } from 'react';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import fist from '../../assets/fist.png'

const ConfirmModal = ({isOpen, message}) => {
    const modal = useRef();
   
    useEffect(() => {
        let timer;
        if (isOpen) {
            modal.current.showModal();
            timer = setTimeout( () => modal.current.close(), 1100)
        };
        return (() => clearTimeout(timer));
    }, [isOpen]);
    
    return createPortal(
        <dialog className="modal" ref={modal}>
            <p>{message}</p>
            <img className="modal-img" src={fist} />
        </dialog>,
        document.getElementById("modal")
    );
};

export default ConfirmModal;