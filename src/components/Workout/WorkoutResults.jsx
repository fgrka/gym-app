import WorkoutCard from './WorkoutCard';


const WorkoutResults = ({exercise, provided, handleRemove}) => {

    return (
        <WorkoutCard handleRemove={handleRemove} exercise = {exercise} provided = {provided} ></WorkoutCard>
    );
};

export default WorkoutResults;