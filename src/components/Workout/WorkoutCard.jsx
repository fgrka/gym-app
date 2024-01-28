import React from 'react';
import { useState, useRef, useContext } from 'react';
import { AppContext } from '../../utils/AppContext';
import refreshIcon from "../../assets/icons8-refresh.svg" 
import WorkoutTimer from './WorkoutTimer';

const WorkoutCard = ({exercise, provided, handleRemove}) => {

    const { workoutParams, handleWorkoutParams } = useContext(AppContext);

    const timeForSet = useRef();
    const sets = useRef();
    const reps = useRef();

    const [currentExercise, setCurrentExercise] = useState("");
    const [isDisabled, setDisabled] = useState(false);
    const [isTimerStarted, setTimerStart] = useState(false);

    const handleInput = () => {
        const totalTime =  timeForSet.current.value * sets.current.value;
        if (reps.current.value > 60 || sets.current.value > 60 || timeForSet.current.value > 60) {
                alert("Ustaw prawidłową wartość (1-60)");
        }
        else {
            handleWorkoutParams({
                id: exercise.id,
                timeForSet : timeForSet.current.value,
                sets : sets.current.value,
                reps : reps.current.value,
                totalTime : totalTime,
            });
        }       
   }

   function handleStartWorkout(id) {
        const current = workoutParams.find((exercise) => exercise.id === id);
        setCurrentExercise(current);
            if (current?.sets>0 && current?.reps>0 && current?.timeForSet>0) {
                setDisabled(true);
                setTimerStart(true);
            }
            else {
                alert("Wartość nie może być równa 0")
            }
   }

   const handleRefresh = () => {
        handleWorkoutParams({});
        setDisabled(false);
        setTimerStart(false);
        reps.current.value = 0;
        sets.current.value = 0;
        timeForSet.current.value = 0;
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
                {/* {isTimerStarted ? <WorkoutTimer timerType={"SET"} currentExercise={currentExercise}/>
                : 
                <div className="timer-countdown">SET {currentExercise.sets}      
                    <span className="time"> 
                    {currentExercise.timeForSet ? currentExercise.timeForSet < 10 ? "0"+currentExercise.timeForSet+":00" : currentExercise.timeForSet+":00" : "0:00" }
                    </span>
                </div> 
                }

                {isTimerStarted ? <WorkoutTimer timerType={"TOTAL"} currentExercise={currentExercise}/>
                : 
                <div className="timer-countdown">TOTAL
                    <span className="time"> 
                    {currentExercise.totalTime ? currentExercise.totalTime < 10 ? "0"+ currentExercise.totalTime+":00" : currentExercise.totalTime+":00" : "0:00" }
                    </span>
                </div> 
                } */}
                 <WorkoutTimer timerType={"SET"} time={currentExercise.timeForSet} startTimer={isTimerStarted}/>
                 <WorkoutTimer timerType={"TOTAL"} time={currentExercise.totalTime} startTimer={isTimerStarted}/>

            </div>
            <button className="workout-set-btn" onClick={() => handleStartWorkout(exercise.id)}>START</button>
            <img className="workout-refresh" src={refreshIcon} onClick={handleRefresh}/>
        </div>
    );
};

export default WorkoutCard;