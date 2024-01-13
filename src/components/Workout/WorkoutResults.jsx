import { useState } from 'react';
import WorkoutCard from './WorkoutCard';


const WorkoutResults = ({exercise, provided, handleRemove}) => {
    const [workoutParams, setWorkoutParams] = useState({
        "reps": 0,
        "sets": 0,
        "time": 0
    });


const handleWorkoutParams = (params) => {
 
    setWorkoutParams({
        ...workoutParams,
        name : value,
    })
}
    return (
        <WorkoutCard handleRemove={handleRemove} exercise = {exercise} provided = {provided} params = {handleWorkoutParams}></WorkoutCard>
    );
};

export default WorkoutResults;