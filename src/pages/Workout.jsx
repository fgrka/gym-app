import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import WorkoutResults from "../components/Workout/WorkoutResults";

const Workout = () => {
    const[exercises, setExercises] = useState([]);

    useEffect(() => {
        if (localStorage.length !== 0) {
            const exercisesData = JSON.parse(localStorage.getItem("exercises"));
            setExercises(Object.values(exercisesData));
        }
    },[])

    const handleRemove = (exercise) => {
        const exercisesData = JSON.parse(localStorage.getItem("exercises"));
        delete exercisesData[exercise.id];
        Object.values(exercisesData).length == 0?
        localStorage.removeItem("exercises") 
        :
        localStorage.setItem("exercises", JSON.stringify(exercisesData)) 
        setExercises(Object.values(exercisesData));
    }

    return (
        localStorage.length == 0 ?
            <div className="workout-empty">
                <h2>THERE IS NOTHING HERE, YET..</h2>
                <h2>ADD EXERCISES FROM EXERCISE PAGE</h2>
                <h2>AND GET YOUR WORKOUT DONE</h2>
            </div>
            :                
            <DragDropContext>
                <Droppable droppableId="droppable">
                {(provided) =>(
                    <div className="workout" ref={provided.innerRef} {...provided.droppableProps} >
                    <h2>SET TIME, REPS AND SERIES OF EXERCISES</h2>
                        {exercises.map((exercise, index) => (
                            <Draggable key={exercise.id} draggableId={exercise.id.toString()} index={index} >
                                {(provided) => (
                                    <WorkoutResults handleRemove={handleRemove} provided={provided} exercise={exercise} />
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
                </Droppable>
            </DragDropContext>
        );
};

export default Workout;