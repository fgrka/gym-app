 import { useContext, useState } from "react";
 import { AppContext } from "../../utils/AppContext";
 import ConfirmModal from "../UI/ConfirmModal";

 const ExerciseCard = ({ exercise }) => {
    const { addToLocalStorage } = useContext(AppContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddClick = (exercise) => {
        addToLocalStorage(exercise);
        setIsModalOpen(true);
    }


 
     return (
        <div className="exercise-card">
                <ConfirmModal isOpen={isModalOpen} message={"Added to your Workout!"}/>
                <button className='exercise-card-btn' onClick={() => handleAddClick(exercise)} disabled={isModalOpen}> {isModalOpen ? "ADDED" : "ADD"}</button>
                <h3>{exercise.name}</h3>
                <div className="exercise-txt"><strong>Main muscles:</strong> <br/> {exercise.target}</div>
                <div className="exercise-txt"><strong>Secondary muscles:</strong> <br/> {exercise.secondaryMuscles.map(muscle => muscle + " ")}</div> 
                <div className="exercise-img" ><img src={exercise.gifUrl}/></div>
        </div>
    );
};

export default ExerciseCard;