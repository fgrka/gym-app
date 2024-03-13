import React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '../../utils/AppContext';
import refreshIcon from "../../assets/icons8-refresh.svg" 
import WorkoutTimer from './WorkoutTimer';
import InputParams from './InputParams';


const WorkoutCard = ({exercise, provided,  }) => {
    const {workoutParams, deleteWorkoutParams, updateWorkoutParams, removeFromLocalStorage} = useContext(AppContext);
    const [isTimerStarted, setTimerStart] = useState(false);
    const [resetParams, setResetParams] = useState(false);


   function handleStartWorkout(id) {
        const current = workoutParams.find((param) => param.id == id);
        const params = current !== undefined ? Object.values(current) : [];
        if (params.length !== 0 && !params.includes(undefined) && !params.includes(0)) {  
            setTimerStart(true);
        }
        else {
            alert("Uzupełnij wszystkie parametry")
        }
   }

   
   function handleRemove(exercise) {
        removeFromLocalStorage(exercise);
 
   }

   function updateParams(input) {
        updateWorkoutParams(input);
   }

   function handleRefresh(id) {
        deleteWorkoutParams(id);
        setTimerStart(false);
        setResetParams((prev) => !prev);
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
                    <InputParams key={resetParams} id={exercise.id} name="sets" setDisabled={isTimerStarted} updateParams={updateParams}   />
                </div> 
                <div>
                    <p>REPS</p> 
                    <InputParams key={resetParams} id={exercise.id} name="reps" setDisabled={isTimerStarted} updateParams={updateParams}  />
                </div> 
                <div className="workout-time-settings">
                    <p>TIME FOR ONE SET</p> 
                    <div className="workout-time-input">   
                        <InputParams key={resetParams} id={exercise.id} name="time" setDisabled={isTimerStarted} updateParams={updateParams}  />                 
                        <p>MINUTES</p>
                    </div>   
                </div>
            </div>
            <div className="workout-timer">
                 <WorkoutTimer timerType={"SET"} exercise={exercise} workoutParams={workoutParams} startTimer={isTimerStarted}/>
                 <WorkoutTimer timerType={"TOTAL"} exercise={exercise} workoutParams={workoutParams} startTimer={isTimerStarted}/>
            </div>
            <button className="workout-set-btn" onClick={() => handleStartWorkout(exercise.id)}>START</button>
            <img className="workout-refresh" src={refreshIcon} onClick={() => handleRefresh(exercise.id)}/>
        </div>
    );
};

export default WorkoutCard;