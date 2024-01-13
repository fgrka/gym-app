import React from 'react';
import { useState, useRef } from 'react';
import refreshIcon from "../../assets/icons8-refresh.svg" 

const WorkoutCard = ({exercise, provided, params, handleRemove}) => {

    const timeForSet = useRef();
    const sets = useRef();
    const reps = useRef();

    const [workoutParams, setWorkoutParams] = useState({           
        timeForSet : "",
        sets : "",
        reps : "",
        totalTime : "",
 })
    const [isDisabled, setDisabled] = useState(false);

    const handleInput = () => {
        const totalTime =  timeForSet.current.value * sets.current.value;
  

        setWorkoutParams((prev) =>({     
            ...prev,
            timeForSet : timeForSet.current.value,
            sets : sets.current.value,
            reps : reps.current.value,
            totalTime : totalTime,
            }))
        
        
   }

   function handleStartWorkout() {
    console.log(workoutParams)
        if (workoutParams.sets>0 && workoutParams.reps>0 && workoutParams.time>0) {
            setDisabled(true);
        }
   }

   const handleRefresh = () => {
    setWorkoutParams({
        name: "",
        value: ""
   });
    setDisabled(false);
   }

    return (
        <div key={exercise.id} ref= {provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="workout-card">
            <button onClick={()=>handleRemove(exercise)} className="workout-remove-btn">REMOVE</button>
            <h3>{exercise.name}</h3>
            <div className="workout-txt">
                <strong>Main muscles:</strong><br/> {exercise.target}
            </div>
            <div className="workout-txt">
                <strong>Secondary muscles:</strong><br/> {exercise.secondaryMuscles.map(muscle => muscle + " ")}
            </div> 
            <div className="workout-img" >
                <img src={exercise.gifUrl}/>
            </div>
            <div className="workout-setting">
                <div>
                    <p>SETS</p> 
                    <input ref={sets} name="sets" className="input-set" type="number" placeholder="0" onChange={handleInput} disabled={isDisabled}></input>
                </div> 
                <div>
                    <p>REPS</p> 
                    <input ref={reps} name="reps" className="input-reps" type="number" placeholder="0" onChange={handleInput} disabled={isDisabled}></input>
                </div> 
                <div className="workout-time-settings">
                    <p>TIME FOR ONE SET</p> 
                    <div className="workout-time-input">                    
                        <input ref={timeForSet} name="time" className="input-time" type="number" placeholder="0"  onChange={handleInput} disabled={isDisabled}></input>
                        <p>MINUTES</p>
                    </div>   
                </div>
            </div>
         
            <div className="workout-timer">
                <div className="set-time">SET {workoutParams.sets} <span className="time"> {workoutParams.timeForSet ? workoutParams.timeForSet + ":00" : "0:00"}</span></div>
                <div className="total-time">TOTAL: 
                    <span className="time"> 
                        {workoutParams.totalTime ? workoutParams.totalTime+":00" : "0:00"}
                    </span>
                </div>
            </div>
            <button className="workout-set-btn" onClick={handleStartWorkout}>START</button>
            <img className="workout-refresh" src={refreshIcon} onClick={handleRefresh}/>
        </div>
    );
};

export default WorkoutCard;