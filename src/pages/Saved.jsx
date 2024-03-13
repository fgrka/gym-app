import React from 'react';

const Saved = () => {

    const saved = JSON.parse(localStorage.getItem("saved")) || {};

    let list = "";

    return (
 
        <div className='exercises'>
        {saved.map(item => (
            <div className="saved-card">
            {/* <ConfirmModal isOpen={isModalOpen} message={"Added to your Workout!"}/> */}
            <div>
                <h3>{item.info.title}</h3>
                <h5>{item.info.date} </h5> 
                <p>DESCRIPTION: {item.info.description}</p>
            </div> 
            <div>
                <p>EXERCISES:</p>
                {item.exercises.map(exercise => {
                    list += exercise.name + ", ";
                    let listFormatted = list.slice(0, list.length-2);
                    return (
                        <p>{listFormatted}</p>
                    )
                })}
            </div> 
            <div className='save-card-buttons'>
                <button className='save-card-btn'>LOAD</button>
                <button className='save-card-btn-remove'>REMOVE</button>
            </div>
        </div>
        ))}
        </div>
    );
};

export default Saved;