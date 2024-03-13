import React, { useEffect, useState } from "react";
import { useRef } from "react"; 

const WorkoutTimer = ({timerType, exercise, startTimer, workoutParams}) => {

    const current = workoutParams.find((param) => param.id == exercise.id);
    const time = timerType == "TOTAL" ?  current?.time*current?.sets : current?.time;
    const sets = current?.sets;

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(time);
    const [currentSet, setCurrentSet] = useState(sets);
    const timer = useRef();

    useEffect(() => {
        if (timerType == "SET") {
            setCurrentSet(sets-1);
        }
        setMinutes(time-1);
        setSeconds(59);
        if (startTimer === true) {
            timer.current = setInterval(() => setSeconds((seconds) => seconds-1), 1000);
        }
        else {
            clearInterval(timer.current);
        }
    }, [startTimer]);    

    useEffect(() => {
        if (timerType == "TOTAL") {
            if (seconds == 0  && minutes == 0 ) {
                clearInterval(timer.current);
            }
            else if (seconds == 0) {
                setMinutes((minutes) => minutes-1);
                setSeconds(59);  
            }
        }
        
        if (timerType == "SET") {
            if (seconds == 0 && minutes == 0 && currentSet > 0) {
                setCurrentSet((currentSet) => currentSet-1);
                setMinutes(time-1);
                setSeconds(59);  
            }
            else if (seconds == 0 && minutes !==0 && currentSet > 0) {
                setMinutes((minutes) => minutes-1);
                setSeconds(59); 
            }
            else if (seconds == 0 && currentSet == 0 && minutes == 0) {
                clearInterval(timer.current)
            }
        }
      }, [seconds]);    

    const timerSet = ( 
        <div className="timer-countdown">  {timerType}  
            <div className="time"> 
                {minutes >= 10 ? minutes : "0"+ minutes}:{seconds >= 10 ? seconds : "0"+ seconds} 
            </div>
        </div>
    );

    const timerNotSet = (
        <div className="timer-countdown"> {timerType}      
            <span className="time"> 
                {time ? time < 10 ? "0"+time+":00" : time+":00" : "0:00"}
            </span>
        </div> 
    );

    return (
        <>
            {startTimer ? timerSet : timerNotSet}
        </>
    );
}

export default WorkoutTimer; 