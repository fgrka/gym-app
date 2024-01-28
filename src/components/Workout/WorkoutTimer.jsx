import React, { useEffect, useState } from "react";
import { useRef } from "react"; 

const WorkoutTimer = ({timerType, time, startTimer}) => {

    
    const setTime= useRef();
    const timer = useRef();

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(time);
    const [timerRunning, setTimerRunning] = useState(false);

    useEffect(()=>{
        if (seconds == 0  && minutes == 0 ) {
            clearInterval(timer.current);
            setTimerRunning(false);
        }
        else if (seconds == 0 ) {
            setMinutes((minutes) => minutes-1);
            setSeconds(59);  

        }
      }, [seconds]);    

    useEffect(()=>{
        if (timerRunning === true) {
            timer.current = setInterval(() => 
            setSeconds((seconds) => 
            seconds-1), 1000);
        }
    }, [timerRunning]);    

    useEffect(()=>{
        setTimerRunning(startTimer);
        setMinutes(time);
    }, [startTimer]);    

    // const start = () => {
    //     setTimerRunning(startTimer);
    //     if (timerRunning === true) {
    //         timer.current = setInterval(() => 
    //         setSeconds((seconds) => 
    //         seconds-1), 1000);
    //     }
    // }

    const timerSet = ( 
        <div className="timer-countdown">  { timerType }  
            <div ref={setTime} className="time"> 
                {minutes >= 10 ? minutes : "0"+ minutes}:{seconds >= 10 ? seconds : "0"+ seconds} 
            </div>
        </div>
    );

    const timerNotSet = (
        <div className="timer-countdown"> { timerType }      
            <span className="time"> 
            {time ? time < 10 ? "0"+time+":00" : time+":00" : "0:00" }
            </span>
        </div> 
    )

    return (
        <>
            {timerRunning ? timerSet : timerNotSet}
        </>
    );
}

export default WorkoutTimer; 