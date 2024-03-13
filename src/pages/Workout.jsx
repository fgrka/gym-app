import { useContext, useEffect, useState, useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import WorkoutCard from "../components/Workout/WorkoutCard";
import { AppContext } from "../utils/AppContext";
import SaveModal from "../components/Workout/SaveModal";

const Workout = () => {
    const { chosenExercises, saveWorkout } = useContext(AppContext);
    const [isSaveBtnClick, setIsSaveBtnClick] = useState(false);
     

    //reload component after changing the array of chosen exercises
    useEffect(() => {                                               
        setIsSaveBtnClick(false);
    }, [chosenExercises])

    const handleSave = (data) => {
        saveWorkout(data);
        setIsSaveBtnClick(false); 
        console.log("saved")
    };

    return (
        chosenExercises.length == 0 ?
            <div className="workout-empty">
                <h2>THERE IS NOTHING HERE, YET..</h2>
                <h2>ADD EXERCISES FROM EXERCISE PAGE</h2>
            </div>
        :   
            <div className="workout">
                <SaveModal isOpen={isSaveBtnClick} onSubmitData={handleSave}/>
                <DragDropContext>
                    <Droppable droppableId="droppable">
                    {(provided) => (
                        <div className="workout-list" ref={provided.innerRef} {...provided.droppableProps} >
                        <div className="workout-title"><h2>SET TIME, REPS AND SERIES OF EXERCISES</h2></div>
                            {chosenExercises.map((exercise, index) => (
                                <Draggable key={exercise.id} draggableId={exercise.id.toString()} index={index} >
                                    {(provided) => (
                                        <WorkoutCard key={exercise.id} exercise = {exercise} provided = {provided} ></WorkoutCard>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                    </Droppable>
                </DragDropContext>
                <button className="save-btn" onClick={() => setIsSaveBtnClick(true)} disabled={isSaveBtnClick}>{isSaveBtnClick ? "SAVED" : "SAVE WORKOUT"}</button>
            </div> 
        );
};

export default Workout;