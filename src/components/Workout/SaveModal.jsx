import React, { useEffect, useRef, useState } from 'react';

const SaveModal = ({isOpen, onSubmitData}) => {
    const saveDialog = useRef();
 
    const handleModalSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        onSubmitData(data);
    }

    useEffect(() => {
        isOpen == true ? saveDialog.current?.showModal() : saveDialog.current?.close(); 
    }, [isOpen]);


    const handleClose = () => {
        saveDialog.current.close();
    }

    return (
        <dialog ref={saveDialog} className='save-modal'>
            <button className='save-modal-close' onClick={() => handleClose()}>X</button>
            <form className='save-modal-inner' onSubmit={handleModalSubmit}>
                <label>Title</label>
                <input name='title' className='save-input' placeholder='Workout title'/>
                <label>Description</label>
                <input name='description' className='save-input' placeholder='Workout description'/>
                <input name='date' type='date'/>
                <button type="submit" className='save-modal-btn'>SAVE</button>
            </form>
        </dialog>
    );
};

export default SaveModal;