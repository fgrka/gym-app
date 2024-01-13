 const ExerciseCard = ({handleLocalStorage, data}) => {
    const exercise= data;
 
    const handleClick = () => {
        handleLocalStorage(exercise);
     }

 
    return (
        <div className="exercise-card">
                <button className='exercise-card-btn' onClick={handleClick}>ADD</button>
                <h3>{exercise.name}</h3>
                <div className="exercise-txt"><strong>Main muscles:</strong> <br/> {exercise.target}</div>
                <div className="exercise-txt"><strong>Secondary muscles:</strong> <br/> {exercise.secondaryMuscles.map(muscle => muscle + " ")}</div> 
                <div className="exercise-img" ><img src={exercise.gifUrl}/></div>
        </div>
    );
};

export default ExerciseCard;